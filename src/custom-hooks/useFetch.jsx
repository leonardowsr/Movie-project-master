import React from 'react';

const useFetch = () => {
  const [dataFetch, setDataFetch] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);

  const request = React.useCallback(async url => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Não foi possivel fazer a requisição');
      }
      const responseJson = await response.json();
      setDataFetch(responseJson);
      setLoading(false);
      
    } catch (error) {
      setError(true);
      console.log(error);
    }
  });
  return { dataFetch, loading, error, request };
};

export default useFetch;
