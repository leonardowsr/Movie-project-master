import React from 'react';
import Movie from '../utilities/Movie';
import styles from '../utilities/Movie.module.css';

const Movies = ({ results, ...props }) => {
  if (results) {
    return (
      <div
        className={`${styles.container_movies} flex overflow-x-scroll gap-2 overflow-y-hidden p-2`}
        {...props}
      >
        {results.map((movie, index) => (
          <Movie
            key={movie.title + index}
            title={movie.title || movie.name}
            imgUrl={movie.poster_path || movie.backdrop_path}
            releaseData={movie.release_date}
            id={movie.id}
          />
        ))}
      </div>
    );
  }
};

export default Movies;
