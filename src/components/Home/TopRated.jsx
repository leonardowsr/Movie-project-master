import React from 'react';
import Title from './Title';
import Movies from './Movies';
import useFetch from '../../custom-hooks/useFetch';

const TopRated = () => {
  const { request, dataFetch } = useFetch();
  React.useEffect(() => {
    request(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=5d3e8ff8d86a6cb2f81e46aa38bfdfea&language=pt-BR&page=1'
    );
  }, []);
  if (dataFetch) {
    const { results } = dataFetch;
    return (
      <div className='my-5 bg-gray-100'>
        <Title title='melhores avaliações' />
        <Movies results={results} />
      </div>
    );
  }
};

export default TopRated;
