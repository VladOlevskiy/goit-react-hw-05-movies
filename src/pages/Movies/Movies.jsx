import { Outlet, useLocation } from 'react-router-dom';
import { Section, ListItem, LinkItem } from './Movies-styled';
import React, { useState, useEffect, lazy } from 'react';
import { useSearchParams } from 'react-router-dom';
import Api from '../../services/API';

const Searchbar = lazy(() => import('../../components/Searchbar/Searchbar'));

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  let query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getFilmByQuery() {
      try {
        const movieDetailsById = (await Api.getFilmsBySearchQuery(query))
          .results;
        if (movieDetailsById.length === 0) {
          alert(
            'Sorry, there are no movies matching your search query. Please try again'
          );
          setSearchParams('');
          return;
        }
        setFilms(movieDetailsById);
      } catch (error) {
        throw new Error(error);
      } finally {
      }
    }
    getFilmByQuery();
  }, [query, setSearchParams]);

  const onSubmit = values => {
    if (values.searchQuery === '') {
      alert('Enter something');
      return;
    }
    setSearchParams(
      values.searchQuery !== '' ? { query: values.searchQuery } : {}
    );
  };

  return (
    <Section>
      <Searchbar onSubmit={onSubmit} />
      {films.map(film => {
        return (
          <ListItem key={film.id}>
            <LinkItem to={`/movies/${film.id}`} state={{ from: location }}>
              {film.title}
            </LinkItem>
          </ListItem>
        );
      })}
      <Outlet />
    </Section>
  );
};

export default Movies;
