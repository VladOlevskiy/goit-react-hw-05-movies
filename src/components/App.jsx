import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import Api from '../services/API';
import React, { useState } from 'react';
import { useEffect, lazy } from 'react';

const Movies = lazy(() => import('../pages/Movies/Movies'));
const Home = lazy(() => import('../pages/Home/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    async function getFilm() {
      try {
        const trendingFilm = (await Api.getTrendingFilms()).results;
        const filterDateOfImages = trendingFilm.map(film => {
          return {
            id: film.id,
            title: film.title,
          };
        });
        setTrendingFilms(filterDateOfImages);
      } catch (error) {
        throw new Error(error);
      } finally {
      }
    }
    getFilm();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home trendingFilms={trendingFilms} />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />{' '}
          </Route>
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<h1>NotFound</h1>} />
        </Route>
      </Routes>
    </div>
  );
};
