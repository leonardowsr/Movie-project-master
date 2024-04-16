import React from 'react';
import styles from './Movie.module.css';
import { Link } from 'react-router-dom';
import semImagem from './../assets/sem-imagem.jpg';

const Movie = ({ title, imgUrl, releaseData, id }) => {
  return (
    <div
      key={title}
      className={`scale-100 hover:scale-110  md:transform-none shadow-sm ${styles.div_img}`}
    >
      <Link to={`/movie/${id}`}>
        <img
          className={`${styles.img} p-1 `}
          src={
            imgUrl === null
              ? `${semImagem}`
              : `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${imgUrl}`
          }
          alt={title}
        />
        <p className={styles.title}>{title}</p>
      </Link>
      <p className={styles.data}>{releaseData}</p>
    </div>
  );
};

export default Movie;
