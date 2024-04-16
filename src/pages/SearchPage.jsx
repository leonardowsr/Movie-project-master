import React from 'react';
import { useEffect } from 'react';
import useFetch from '../custom-hooks/useFetch';
import { useParams, useLocation } from 'react-router-dom';
import Movie from '../components/utilities/Movie';
import Movies from '../components/Home/Movies';
import styles from '../pages/MoviePage.module.css';
import JumpPage from '../components/utilities/JumpPage';

const SearchPage = () => {
  const { request, dataFetch, loading } = useFetch();
  let [page, setPage] = React.useState(1);
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const searchString = search.get('q');

  useEffect(() => {
    request(
      `https://api.themoviedb.org/3/search/movie?api_key=5d3e8ff8d86a6cb2f81e46aa38bfdfea&language=pt-BR&query=${searchString}&page=${page}&include_adult=false`
    );
    window.scrollTo(0, 0);
  }, [searchString, page]);

  const previousPage = () => {
    if (page > 1) setPage(--page);
  };
  const nextPage = () => {
    if (page < dataFetch.total_pages) setPage(++page);
  };

  if (dataFetch) {
    const { results } = dataFetch;
    return (
      <section className=' w-full'>
        <div className='m-auto'>
          <div>
            {loading ? (
              <p className='text-gray-800 text-3xl p-5 text-center'>
                Fazendo busca...
              </p>
            ) : (
              <p className='text-gray-800 text-2xl sm-text-3xl p-10 text-center'>
                {dataFetch.total_results + ' '}resultados para a busca:
                {dataFetch.total_results === 0 && <span> 0 resultados</span>}
              </p>
            )}
          </div>
          <Movies
            results={results}
            className={`${styles.page_search} gap-1 grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 xl:w-11/12 xl:m-auto md-gap-5 sm:p-5  `}
          />
        </div>
        <div className='text-center pb-10 '>
          <div className='flex text-center justify-center items-center gap-2'>
            <p className=''>pagina:</p>
            <span className='text-center bg-gray-800 block text-white w-8 my-2 border'>
              {dataFetch.page}
            </span>
            <span className='text-center block text-black w-8 my-2 border'>
              {dataFetch.total_pages}
            </span>
          </div>
          <JumpPage previousPage={previousPage} nextPage={nextPage} />
        </div>
      </section>
    );
  }
};

export default SearchPage;
