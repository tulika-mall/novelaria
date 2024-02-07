import React, {useEffect, useState} from 'react'
import axios from 'axios';
import header from '../assests/header.png'
import {Link} from 'react-router-dom';
import { Nytkey,Fkey,Nfkey,Yakey } from '../api';
import { useNavigate } from 'react-router-dom';
import { useApi } from '../context';
import { GridLoader } from 'react-spinners';


const HomeScreenComponents = () => {
    const [featured, setFeatured] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { apiUrl , changeApiUrl, selectedItem, setHeading} = useApi();


 const fetchInfo = async () => {
  setLoading(true)
    try {
        const res = await axios.get(`https://api.nytimes.com/svc/books/v3/lists.json?list=trade-fiction-paperback&api-key=${Nytkey}`);
        console.log(res.data.results);
        setFeatured(res.data.results)
        setLoading(false)
      } catch (err) {
        console.error(err);
        setLoading(false)
      }
    };

      const navigate = useNavigate();

    
      const handleClick = (category) => {
 
        setHeading(category);

        switch (category) {
          case 'fiction':
            changeApiUrl(Fkey);
            break;
          case 'nonfiction':
            changeApiUrl(Nfkey);
            break;
          case 'ya':
            changeApiUrl(Yakey);
              break;}

        navigate('/bestseller');

      };

 
  useEffect(() => {
        fetchInfo();
      }, []);

      

  return (
    <div className='min-h-screen'>
    <div className="z-0 pt-0 sm:pt-8  bg-violet-300 pb-20 ">
      <div className=" pt-10  gap-8 grid grid-cols-1  lg:grid-cols-3 place-items-center mx-4" >
        {/* Image 1 */}
        <div className="relative cursor-pointer" onClick={()=>handleClick("fiction")}>
          <img src={header} alt="button" className="w-68 h-64 shadow-md" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold">
           Bestseller Fiction
          </div>
        </div>

        {/* Image 2 */}
        <div className="relative cursor-pointer" onClick={()=>handleClick("nonfiction")}>
          <img src={header} alt="button" className="w-68 h-64" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold">
         Bestseller Nonfiction
          </div>
        
        </div>

        {/* Image 3 */}
        <div className="relative " onClick={()=>handleClick("ya")}>
          <img src={header} alt="button" className="w-68 h-64" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold">
            Young Adults
          </div>
        </div>
      </div>
    </div>
     
    {loading ? (
    <div className="flex items-center justify-center w-full mt-16 mb-16">
      <GridLoader color="rgba(200, 132, 255, 1)" />
    </div>
  ) : (
     <div className='px-20 '>
    <p  className='pt-10 font-serif text-3xl font-extrabold '>Featured</p>
   
    {featured.map((book,) => (
      <>
  <ol class="space-y-4 list-inside dark:text-gray-400 pt-5">
   <li className= ' text-black '>
      <div className='flex py-10 gap-6'>
      <img src={"https://storage.googleapis.com/du-prd/books/images/"+book.isbns[0].isbn13+".jpg"} alt="book_display" className='flex justify-center h-full w-36 mt-2'></img>
      <div>
      <p className='font-serif text-lg font-bold'>{book.book_details[0].title}</p>
      <p>{book.book_details[0].author}</p>
      <ul class="ps-5 mt-2 mb-4  space-y-1 list-disc list-inside">
         <li className= ' pt-4 text-gray-700 '>{book.book_details[0].description}</li>
      </ul>
      <Link to={book.amazon_product_url}>
      <button className='hidden sm:block bg-purple-300 hover:bg-purple-400 border rounded-lg p-3 px-5  ml-4 text-white '>Buy</button>
      </Link>
      </div>
      </div>
   </li>
 </ol>
  <hr className='h-4 border-t-2 border-violet-200'/>
  </>
 ))}

 </div>)}
    </div>
    
  )
    
}

export default HomeScreenComponents