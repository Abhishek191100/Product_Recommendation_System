import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Blank from './components/Blank';
import HomeSection from './components/HomeSection';

const HomePage = () => {
  return (
    <>
      <Navbar/>
       <Header/>
      <HomeSection/>
      {/*<Blank/> */}
    </>
  )
}

export default HomePage;
