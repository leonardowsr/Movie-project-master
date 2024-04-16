import React from 'react';
import useFetch from '../custom-hooks/useFetch';
import { useEffect } from 'react';
import MoviePageDetails from '../components/MoviePageDetails/MoviePageDetails';
import { useParams } from 'react-router-dom';
import styles from '../pages/MoviePage.module.css';

const MoviePage = () => {
  const { request, dataFetch, loading } = useFetch();
  const { id } = useParams();
  if (id)
    useEffect(() => {
      request(
        `https://api.themoviedb.org/3/movie/${id}?api_key=5d3e8ff8d86a6cb2f81e46aa38bfdfea&language=pt-BR`
      );
    }, []);
  if (dataFetch)
    return (
      <section
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent 20%, #050404 90%),url(https://image.tmdb.org/t/p/w1920_and_h1080_multi_faces/${
            dataFetch.backdrop_path || dataFetch.poster_path
          })`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        className={`${styles.background} flex w-100%  items-center justify-center px-5`}
      >
        {!loading ? (
          <MoviePageDetails dataFetch={dataFetch} />
        ) : (
          <div className='text-white text-4xl'>Carregando...</div>
        )}
      </section>
    );
};

export default MoviePage;
