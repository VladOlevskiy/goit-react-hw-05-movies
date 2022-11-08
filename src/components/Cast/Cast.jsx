import { useParams, useLocation } from 'react-router-dom';

import Api from 'services/API';
import React, { useState, useEffect } from 'react';
import defaultImg from '../../image/no-image.jpg';
import { CastListItem } from './Cast-styled';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    async function getCastById() {
      try {
        const movieCastById = (await Api.getCastById(id)).cast;
        const filteredCastById = movieCastById.map(film => {
          return {
            name: film.name,
            character: film.character,
            id: film.id,
            image: film.profile_path,
          };
        });
        setMovieCast(filteredCastById);
      } catch (error) {
        throw new Error(error);
      } finally {
      }
    }
    getCastById();
  }, [id]);
  return (
    <>
      <ul>
        {movieCast.map(film => {
          let src = 'https://image.tmdb.org/t/p/w500/' + film.image;
          return (
            <CastListItem key={film.id}>
              {film.image ? (
                <img src={src} alt="" width="150px" height="225px" />
              ) : (
                <img
                  src={defaultImg}
                  alt="no-images here"
                  width="150px"
                  height="225px"
                />
              )}
              <p>{film.name}</p>
              <p>Character: {film.character}</p>
            </CastListItem>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;
