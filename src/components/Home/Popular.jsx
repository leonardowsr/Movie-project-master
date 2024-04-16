import React from 'react';
import Title from './Title';
import Movies from './Movies';
import useFetch from '../../custom-hooks/useFetch';
import arrowDown from './../assets/png/arrowDown.png';

const Popular = () => {
  const { request, dataFetch, loading } = useFetch();
  React.useEffect(() => {
    request(
      'https://api.themoviedb.org/3/movie/popular?api_key=5d3e8ff8d86a6cb2f81e46aa38bfdfea&language=pt-BR&page=1'
    );
  }, []);
  if (loading)
    return <p className='text-4xl text-center p-20'>Carregando...</p>;
  if (dataFetch) {
    const { results } = dataFetch;
    return (
      <>
        <span className=' block m-5'>
          <img
            className='m-auto animate-bounce'
            src={arrowDown}
            alt='arrow-down'
          />
        </span>
        <div className='my-5 bg-gray-100'>
          <Title title='Mais populares ' />
          <Movies results={results} />
        </div>
      </>
    );
  }
};

export default Popular;
