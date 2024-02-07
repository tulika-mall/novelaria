import React from 'react'
import HomeScreen from './Pages/HomeScreen'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bestseller from './Pages/Bestseller';
import { ApiProvider } from './context';
import SearchResult from './Pages/SearchResult';
import Footer from './Components/Footer';



const App = () => {
  return (
    <ApiProvider>
    <Router>
      <div className='overflow-x-hidden'>
    <Navbar />
    <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/bestseller" element={<Bestseller />} />
        <Route path="/search/:search" element={<SearchResult />} />
    </Routes >
    <Footer />
    </div>
    </Router>
    </ApiProvider>
  )
}

export default App
