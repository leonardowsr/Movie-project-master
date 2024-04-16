import React from 'react';
import { useNavigate } from 'react-router-dom';
import searchIcon from './../assets/png/searchIcon.png';

const FormSearch = () => {
  const [search, setSearch] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    if (!search) return;
    navigate(`search/search?q=${search}`);
    setSearch('');
  };
  return (
    <form onSubmit={handleSubmit} className='flex gap-1'>
      <input
        className='p-2 w-72 rounded-md border-none  placeholder:italic placeholder:text-slate-400'
        type='search'
        value={search}
        onChange={({ target }) => setSearch(target.value)}
        placeholder='Buscar filmes'
      />
      <button>
        <img src={searchIcon} alt='search' />
      </button>
    </form>
  );
};

export default FormSearch;
