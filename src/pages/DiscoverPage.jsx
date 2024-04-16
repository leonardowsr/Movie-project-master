import React from 'react';
import Gender from '../components/discover/Gender';
import SortBy from '../components/discover/SortBy';
import Movies from '../components/Home/Movies';
import JumpPage from '../components/utilities/JumpPage';
import useFetch from '../custom-hooks/useFetch';
import styles from '../pages/MoviePage.module.css';

const DiscoverPage = () => {
  const [sortBy, setSortBy] = React.useState('popularity.desc');
  const { request, dataFetch, loading } = useFetch();
  let [sortByDrop, setSortByDrop] = React.useState(false);
  let [filtreOn, setFiltreOn] = React.useState(false);
  const [genders, setGenders] = React.useState([]);
  let [page, setPage] = React.useState(1);
  let [check, setCheck] = React.useState(false);
  const apiKey = '5d3e8ff8d86a6cb2f81e46aa38bfdfea';

  const handleFiltreOn = () => {
    setFiltreOn(!filtreOn);
  };

  const handleSubmit = e => {
    e.preventDefault();
    request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&region=US&sort_by=${sortBy}&with_genres=${genders.join(
        '%2C'
      )}`
    );
    setFiltreOn(false);
    setCheck(true);
    setPage(1);
    console.log(dataFetch);
  };
  console.log(genders);
  React.useEffect(() => {
    request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&region=US&sort_by=${sortBy}&page=${page}&with_genres=${genders.join(
        '%2C'
      )}`
    );
    setCheck = true;
  }, [page]);
  console.log(dataFetch);
  const previousPage = () => {
    if (page > 1) setPage(--page);
    window.scrollTo(0, 0);
  };
  const nextPage = () => {
    if (page < dataFetch.total_pages) setPage(++page);
    window.scrollTo(0, 0);
    console.log(dataFetch);
  };

  if (dataFetch)
    return (
      <section className='m-3 '>
        <h1 className='text-center text-xl p-2 font-bold'>
          Descubra, explore e ache um filme pra curtir a sua noite ou dia.
        </h1>
        <form
          onSubmit={handleSubmit}
          className='text-center w-72 flex flex-col m-auto gap-2  lg:w-2/4 sm:items-center border p-2'
        >
          <div className='sm:w-72 md:w-4/4 xl:w-3/6 cursor-pointer'>
            <div
              className='hover:bg-black px-5 border p-1 bg-gray-800 text-white'
              onClick={() => setSortByDrop(!sortByDrop)}
            >
              Ordenar {sortByDrop ? <span>▼</span> : <span>▶</span>}
            </div>
            {sortByDrop ? (
              <SortBy sortBy={sortBy} setSortBy={setSortBy} />
            ) : null}
          </div>

          <div className='sm:w-72 md:w-4/4 xl:w-3/6 cursor-pointer'>
            <div
              onClick={handleFiltreOn}
              className=' hover:bg-black border py-1 bg-gray-800 text-white'
            >
              Filtrar
              {filtreOn ? <span>▼</span> : <span>▶</span>}
            </div>
            {filtreOn ? (
              <div>
                <Gender
                  check={check}
                  setCheck={setCheck}
                  genders={genders}
                  setGenders={setGenders}
                  
                />
              </div>
            ) : null}
          </div>

          <button className='hover:bg-black sm:w-72 bg-gray-800  p-2 border text-white  md:w-4/4 xl:w-3/6'>
            Pesquisar
          </button>
        </form>
        {!loading ? (
          <div>
            <div className='m-auto'>
              <Movies
                results={dataFetch.results}
                className={` ${styles.page_search} grid gap-1 py-5 grid-cols-3  sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 xl:w-11/12 xl:m-auto md-gap-5 sm:p-5 `}
              />
            </div>
            <div className='text-center pb-10 '>
              <div className='flex text-center justify-center items-center gap-2'>
                <p className=''>pagina:</p>
                <span className='text-center bg-gray-800 block text-white w-8 my-2 border'>
                  {dataFetch.page}
                </span>
                <span className='text-center block  text-black w-16 my-2 border'>
                  {dataFetch.total_pages}
                </span>
              </div>
              <JumpPage previousPage={previousPage} nextPage={nextPage} />
            </div>
          </div>
        ) : (
          <p className='text-4xl text-center  p-20'>carregando...</p>
        )}
      </section>
    );
};

export default DiscoverPage;
