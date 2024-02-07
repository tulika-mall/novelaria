import React, {useState, useEffect} from 'react'
import Novelaria_icon from '../assests/Novelaria_icon.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
      navigate(`/search/${searchTerm}`);
  
  };

  useEffect(() => {
    const button = document.getElementById('dropdownMenuIconHorizontalButton');
    const dropdown = document.getElementById('dropdownDotsHorizontal');
  
    const handleToggle = () => {
      dropdown.classList.toggle('hidden');
    };
  
    const handleClickOutside = (event) => {
      if (dropdown && !dropdown.contains(event.target) && !button.contains(event.target)) {
        // Clicked outside of dropdown and button, close dropdown
        dropdown.classList.add('hidden');
      }
    };
  
    button.addEventListener('click', handleToggle);
    document.addEventListener('click', handleClickOutside);
  
    return () => {
      button.removeEventListener('click', handleToggle);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  

  return (
    <>
    <div className= 'z-0 bg-violet-300'>
  <nav className="bg-violet-400 z-30 top-0 start-0 shadow-xl text-white">
  <div className="container mx-auto flex items-center h-24">
    <a href="/" className="flex items-center justify-center">
      <img
        className="h-16"
        src={Novelaria_icon}
        alt="icon"
      />
      <span className="ml-4 uppercase font-black ">
        Novelaria
      </span>
    </a>
    <nav className="contents font-semibold text-base lg:text-lg">
      <ul className="mx-auto flex items-center ">
        <li className="p-5 xl:p-8 active hidden lg:block">
          <a href="/">
            <span><p className="hover:text-purple-600" >Home</p></span>
          </a>
        </li>
        <li className="p-5 xl:p-8 hidden lg:block">
          <a href="">
            <span><p className="hover:text-purple-600">About</p></span>
          </a>
        </li>
        <li className="p-5 xl:p-8 hidden lg:block">
        <a href="mailto:tulika.mall15@gmail.com">
            <span><p className="hover:text-purple-600">Contact</p></span>
          </a>
        </li>
        <li className="p-5 xl:p-8 hidden lg:block">
          <a href="https://bloggy-zeta.vercel.app">
            <span><p className="hover:text-purple-600">Blog</p></span>
          </a>
        </li>
      </ul>
    </nav>


    <div className="my-4 mt-8 hidden sm:block">
  <div className="relative mb-4 flex w-full flex-wrap items-stretch">
    <input
      type="search"
      className="relative m-0 block min-w-0 flex-auto rounded border  border-solid border-neutral bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-2 focus:border-purple-800 focus:text-white focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="button-addon2"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    {/*Search icon*/}
    <span
      className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
      id="basic-addon2"
      onClick={searchTerm ? handleSearch : null}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  </div>
</div>

<div className='block lg:hidden mx-2'>
  <button
    id="dropdownMenuIconHorizontalButton"
    data-dropdown-toggle="dropdownDotsHorizontal"
    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
    type="button"
  >
    <svg
      className="w-5 h-5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 3"
    >
      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
    </svg>
  </button>
  </div>
  </div>
  </nav>

  <div className='absolute top-20 lg:hidden mx-2 right-0 z-64 '>
  {/* Dropdown menu */}
  <div
    id="dropdownDotsHorizontal"
    className="z-64 hidden bg-violet-500 divide-y divide-gray-100 rounded-lg shadow w-44"
  >
    <ul
      className="py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownMenuIconHorizontalButton"
    >
      <li>
        <a
          href="/"
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="mailto:tulika.mall15@gmail.com"
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Contact
        </a>
      </li>
      <li>
        <a
          href="https://bloggy-zeta.vercel.app"
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Blog
        </a>
      </li>
    </ul>
  </div>
</div>

<div className="z-4 my-4 mt-8 mx-4 ml-8 block sm:hidden pb-4">
  <div className="  mb-4 flex w-full flex-wrap items-stretch">
    <input
      type="search"
      className=" m-0 block min-w-0 flex-auto rounded border  border-solid border-neutral bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-gray-800 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-2 focus:border-purple-800 focus:text-purple-800 focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="button-addon2"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    {/*Search icon*/}
    <span
      className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
      id="basic-addon2"
      onClick={searchTerm ? handleSearch : null}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  </div>
</div>
</div>


  

    </>
  )
}

export default Navbar