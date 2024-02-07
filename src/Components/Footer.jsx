import React from 'react'

const Footer = () => {
  return (
   
    <footer className="bg-violet-400 rounded-lg shadow m-4 ">
  <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
    <span className="text-sm text-white sm:text-center ">
      <p>© 2024 Novelaria . Made by Tulika Mall</p>
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0 ">
      <li className='hidden md:block'>
        <a href="#" className="hover:underline me-4 md:me-6">
          About
        </a>
      </li>
      <li className='hidden md:block'>
        <a href="https://bloggy-zeta.vercel.app" className="hover:underline me-4 md:me-6">
          Blog
        </a>
      </li>
      <li className='hidden md:block'>
        <a href="mailto:tulika.mall15@gmail.com" className="hover:underline">
          Contact
        </a>
      </li>
    </ul>
  </div>
</footer>

  )
}

export default Footer