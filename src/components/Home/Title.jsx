import React from 'react';

const Title = ({ title }) => {
  return (
    <h1 className='text-1xl font-bold sm:text-2xl bg-black-400 m-2 border-t'>
      {title}
    </h1>
  );
};

export default Title;
