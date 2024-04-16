import React from 'react';

const sortByArray = [
  ['Popularidade (maior)', 'popularity.desc'],
  ['Popularidade (menor)', 'popularity.asc'],
  ['Lançamento (antigo)', 'release_date.asc'],
  ['Lançamento (novo)', 'release_date.desc'],
  ['Bilheteria (menor)', 'revenue.asc'],
  ['Bilheteria (maior)', 'revenue.desc'],
  ['Título (a-z)', 'original_title.asc'],
  ['Título (z-a)', 'original_title.desc'],
];

const SortBy = ({ setSortBy, sortBy }) => {
  return (
    <label htmlFor='' className='border p-2 block'>
      Organizar por:{' '}
      <select
        onChange={({ target }) => setSortBy(target.value)}
        className=' p-1 text-sm border border-black'
        name='select'
        id='select'
      >
        {sortByArray.map(([ptbr, en]) => (
          <option
            value={en}
            checked={name === sortBy}
            className='text-sm w-5'
            key={en}
          >
            {ptbr}
          </option>
        ))}
      </select>
    </label>
  );
};

export default SortBy;
