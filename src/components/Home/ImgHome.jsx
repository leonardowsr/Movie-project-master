import React from 'react';
import { useEffect } from 'react';
import styles from '../Home/ImgHome.module.css';
import pulpFiction from './../assets/pulpFiction.jpg';

const ImgHome = () => {
  return (
    <section
      style={{ backgroundImage: `url(${pulpFiction})` }}
      className={`shadow-md shadow-black p-6 md-p-20 ${styles.bg_img}`}
    >
      <p
        className={`${styles.title}  text-yellow-200 text-3xl  md:text-4xl font-bold`}
      >
        Bem vindo(a).
      </p>
      <p className={`${styles.title} text-yellow-200 text-sm md:text-xl`}>
        Pesquise filmes, novidades e divirta-se!
      </p>
    </section>
  );
};

export default ImgHome;
