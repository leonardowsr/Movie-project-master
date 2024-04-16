import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import DiscoverPage from './pages/DiscoverPage';
import Home from './pages/Home';
import MoviePage from './pages/MoviePage';
import SearchPage from './pages/SearchPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movie/:id' element={<MoviePage />} />
        <Route path='search/:id' element={<SearchPage />} />
        <Route path='explorar' element={<DiscoverPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
