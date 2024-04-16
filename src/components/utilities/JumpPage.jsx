import React from 'react';

const JumpPage = ({ previousPage, nextPage }) => {
  return (
    <div>
      <button className='border text-xs p-2 mx-5' onClick={previousPage}>
        pagina anterior
      </button>
      <button onClick={nextPage} className='border text-xs p-2'>
        Próxima pagina
      </button>
    </div>
  );
};

export default JumpPage;
