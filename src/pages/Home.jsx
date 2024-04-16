import React from 'react';
import ImgHome from '../components/Home/ImgHome';
import Popular from '../components/Home/Popular';
import LastMovies from '../components/Home/TopRated';
import Upcoming from '../components/Home/Upcoming';

const Home = () => {
  return (
    <section className='w-full   m-auto md:w-9/12'>
      <ImgHome />
      <Popular />
      <LastMovies />
      <Upcoming />
    </section>
  );
};

export default Home;
