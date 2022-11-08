import { Outlet, useLocation } from 'react-router-dom';
import { Section, ListItem, LinkItem } from './Movies-styled';
import Searchbar from '../../components/Searchbar/Searchbar';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Api from '../../services/API';
import { Link } from 'react-router-dom';

export const Movies = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getFilmByQuery() {
      try {
        const movieDetailsById = (await Api.getFilmsBySearchQuery(query))
          .results;
        setFilms(movieDetailsById);
      } catch (error) {
        throw new Error(error);
      } finally {
      }
    }
    getFilmByQuery();
  }, [query]);

  const onSubmit = values => {
    if (values.searchQuery === '') {
      console.log('Enter something');
      return;
    }
    console.log(values.searchQuery);
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
