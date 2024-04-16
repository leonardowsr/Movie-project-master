import React from 'react';
import Title from './Title';
import Movies from './Movies';
import useFetch from '../../custom-hooks/useFetch';

const Upcoming = () => {
  const { request, dataFetch } = useFetch();
  React.useEffect(() => {
    request(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=5d3e8ff8d86a6cb2f81e46aa38bfdfea&language=pt-BR&page=1&region=BR'
    );
  }, []);
  if (dataFetch) {
    const { results } = dataFetch;
    return (
      <div className='my-5 bg-gray-100'>
        <Title title='O que está no ar' />
        <Movies results={results} />
      </div>
    );
  }
};

export default Upcoming;
