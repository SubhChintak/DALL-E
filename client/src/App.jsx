import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { logo } from './assets';
import { Home, CreatePost } from './pages';

const App = () => {
  return (
    <BrowserRouter>
    <header className='w-full flex justify-between items-center bg-lime-400 sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
    <Link to={"/"}>
    <img src={logo} alt='logo' className='w-28 object-contain' />
    </Link>
     
    <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
    </header>

    <main className="sm:p-8 px-4 py-8 w-full bg-lime-200 min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
       <footer className='w-full flex justify-between items-center bg-lime-400 sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
       <p className="mt-2 text-[#222328] text-[15px] max-w-[500px]">Copyright © 2023 | <a href="https://www.linkedin.com/in/subhchintak/">SubhChintak.dev</a></p>
       </footer>
    </BrowserRouter>
  )
}

export default App
