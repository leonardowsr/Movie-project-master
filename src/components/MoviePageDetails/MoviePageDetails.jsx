import React from 'react';
import styles from './MoviePageDetails.module.css';
// import semImagem from '../../assets/sem-imagem.jpg';
const MoviePageDetails = ({ dataFetch, details }) => {
  window.scrollTo(0, 0);
  if (dataFetch) {
    return (
      <div
        key={dataFetch.title}
        className={`${details}bg-gray-10 w-full pt-5 mx-auto ronded sm:w-9/12 md:text-center lg:text-left xl:w-8/12 2xl:w-7/12`}
      >
        <div className='border rounded  bg-black/80 m-auto flex-wrap flex p-4 md:p4 lg:flex-nowrap'>
          <div className=' rounded m-auto '>
            <img
              className='w-44 sm:h-4/4 sm:w-65 h-44 m-auto  md:w-56 lg:w-96 lg:h-96 xl:w-96'
              src={`${
                `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${dataFetch.backdrop_path}` !==
                null
                  ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${dataFetch.poster_path}`
                  : 'oi'
              }`}
              alt={dataFetch.title}
            />
          </div>
          <div className=' w-full px-5 flex flex-col gap-2 lg:px-5'>
            <div>
              <p
                className={`${styles.movie_name} p-3 sm:text-xl font-bold text-yellow-300 shadow text-center lg:text-3xl`}
              >
                {dataFetch.title || dataFetch.name} (
                {dataFetch.release_date.slice(0, 4)})
              </p>
            </div>
            <div>
              <p className='text-xs sm:text-sm  text-white lg:text-lg'>
                <strong className='text-yellow-200'>Titulo original</strong>: {dataFetch.original_title}
              </p>
              <p className='text-xs md:justify-center lg:justify-start  text-white sm:text-sm lg:text-lg'>
                <strong className='text-yellow-200'>Genêro(s)</strong>: 
                {dataFetch.genres.map(genre => (
                  <span
                    key={genre.name}
                    className='text-xs text-white text-center m-1  px-1  rounded-r-full bg-gray-900'
                  >
                    {genre.name}
                  </span>
                ))}
              </p>
              <p className='text-xs sm:text-sm text-white lg:text-lg'>
                <strong className='text-yellow-200'>{dataFetch.runtime}</strong> minutos.
              </p>
              <p className='text-xs sm:text-sm text-white lg:text-lg'>
                <strong className='text-yellow-200'>Custo</strong>{': '}
                {dataFetch.budget || 'Não informado a quantidade de '} dólares.
              </p>
              <p className='text-xs sm:text-sm text-white lg:text-lg'>
                <strong className='text-yellow-200'>Bilheteria</strong>{': '}
                {dataFetch.revenue || ' Não informado a quantidade de '}{' '}
                dólares.
              </p>
              <div className='mt-2 py-1'>
                <p className='italic py-1 text-xs sm:text-sm text-gray-400 xl:text-sm'>
                  {dataFetch.tagline}
                </p>
                <h1 className=' text-sm sm:text-sm font-bold text-yellow-200 lg:text-lg'>
                  Sinopse
                </h1>
                <div className=' text-xs sm:text-sm text-white lg:text-lg'>
                  <p>{dataFetch.overview || 'Não informado.'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MoviePageDetails;
