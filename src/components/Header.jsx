import React from 'react';
import FormSearch from './search/FormSearch';
import { Link } from 'react-router-dom';
import styles from '../components/search/Header.module.css';

const Header = () => {
  const [search, setSearch] = React.useState(false);
  return (
    <header className='bg-black p-3 sticky border-b  '>
      <ul className=' gap-3  m-2 items-center '>
        <div className='flex sm:flex-row items-center justify-around sm:gap-5 betw '>
          <div className='flex gap-5'>
            <Link to='/'>
              <h1 className='border font-bold  sm:text-1xl hover:bg-white hover:text-black p-3 text-white'>
                Home
              </h1>
            </Link>
            <Link to='explorar'>
              <p className='sm:text-1xl font-bold border text-white hover:bg-white hover:text-black p-3'>
                Explorar
              </p>
            </Link>
          </div>
          <button
            onClick={() => setSearch(!search)}
            className=' text-1xl border font-bold text-white hover:bg-white hover:text-black p-3'
          >
            Pesquisar
          </button>
        </div>
      </ul>
      {search && (
        <div
          className={`${styles.search_bar} flex p-3 border-t-gray-500 w-full`}
        >
          <div className='m-auto'>
            <FormSearch />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
