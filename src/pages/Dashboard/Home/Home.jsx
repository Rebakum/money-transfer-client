import React from 'react';
import banner from '../../../assets/images/bannar.png';
import Header from './Header';
import Navber from './Navber';
import OurServices from './OurServices';

const Home = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="w-full max-w-md mx-auto space-y-4 bg-gray-100 shadow-md opacity-50 rounded-2xl backdrop-filter backdrop-blur-md">
        <Header/>
        <OurServices />
        <Navber />
      </div>
    </div>
  );
};

export default Home;
