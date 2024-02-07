import React, { useState, useEffect } from 'react';
import axios from 'axios';  
import bookI from "../assests/bookI.png";
import { Link } from 'react-router-dom'
import { Nytkey } from '../api';
import { useApi } from '../context';
import { GridLoader } from 'react-spinners';


const Bestseller = () => {

  
    
    const [data, setData] = useState([]);
    const { apiUrl , selectedItem } = useApi();
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await axios.get(apiUrl);
        console.log(res.data.results)
        setData(res.data.results)
        setLoading(false)

      } catch (err) {
        console.error(err);
        setLoading(false)
      }
    };

    useEffect(()=> {
        fetchData()
    }, [apiUrl, selectedItem])

    let heading = 'Bestseller';

    if (selectedItem === 'fiction') {
      heading = 'Fiction Bestseller';
    } else if (selectedItem === 'nonfiction') {
      heading = 'Non-fiction Bestseller';
    } else if (selectedItem === 'ya') {
      heading = 'Young Adult Bestseller';
    }


  return (
<div>
  {loading ? (
    <div className="flex items-center justify-center w-full mt-64 mb-64">
      <GridLoader color="rgba(200, 132, 255, 1)" />
    </div>
  ) : (
    <>
      <p className='mt-12 mx-10 text-3xl font-extrabold text-purple-800'>{heading}</p>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-8 px-16 gap-4'>
        {data.map((item, index) => (
          <li key={item.id} className='p-4 h-full border border-gray-300 relative'>
            <img
              src={`https://storage.googleapis.com/du-prd/books/images/${item.isbns[0].isbn13}.jpg`}
              onError={(e) => {
                e.target.src = bookI;
              }}
              alt="book_image"
              className='mb-4 w-full '
            />
            <div className='flex'>
              <div className='mr-2'>{index + 1}</div>
              <div>
                <p className='font-serif text-lg font-bold'>{item.book_details[0].title}</p>
                <p>{item.book_details[0].description}</p>
                <Link to={item.amazon_product_url}>
                  <button className=' bg-purple-300 hover:bg-purple-400 border rounded-lg p-3 px-5 mt-4 text-white'>Buy</button>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  )}
</div>



  )
}

export default Bestseller