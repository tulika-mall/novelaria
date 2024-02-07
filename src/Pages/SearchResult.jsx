import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import { Gkey } from '../api';
import { GridLoader } from 'react-spinners';
import bookI from "../assests/bookI.png"; 

const SearchResult = () => {

    const { search } = useParams();
    const [searchTerm, setSearchTerm] = useState([])
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
    const fetchSearch = async() => {
        setLoading(true)
      try {
        const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${Gkey}`);
        setSearchTerm(res.data.items);
        console.log(res.data.items);
        setLoading(false)
      } catch (err) {
        console.error(err);
        setLoading(false)
      }
    };

    if (search) {
        fetchSearch();
      }
    }, [search])

  return (
   <>
    {loading ? (
    <div className="flex items-center justify-center w-full mt-64 mb-64">
      <GridLoader color="rgba(200, 132, 255, 1)" />
    </div>
  ) : (
    <div className='min-h-screen px-20 '>
    <p  className='pt-10 font-serif text-3xl font-extrabold text-purple-500 '>Results</p>
   
    {searchTerm.map((book,) => (
      <>
  <ol class="space-y-4 list-inside dark:text-gray-400 pt-5">
   <li className= ' text-black '>
      <div className='flex py-10 gap-6'>
     <img src={book?.volumeInfo?.imageLinks?.thumbnail || bookI}
     onError={(e) => {
      e.target.src = bookI;  }}
       alt="book_display" className='flex justify-center h-full w-36 mt-2'></img>
      <div>
      <p className='font-serif text-lg font-bold'>{book.volumeInfo.title}</p>
      <p>{book.volumeInfo.authors}</p>
      
      <ul class="ps-5 mt-2 mb-4  space-y-1 list-disc list-inside">
         <li className= ' pt-4 text-gray-700 '> {book.searchInfo && book.searchInfo.textSnippet? book.searchInfo.textSnippet: 'No description found'}</li>
      </ul>
      </div>
      </div>
   </li>
 </ol>
  <hr className='h-4 border-t-2 border-violet-200'/>
  </>
 ))}

 </div>
  )}
    </>
  )
}

export default SearchResult