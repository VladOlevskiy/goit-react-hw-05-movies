import { ListItem, LinkItem } from './TrendingFilmsList-styled';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Api from '../../services/API';

const TrendingFilmsList = () => {
  const location = useLocation();
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
    <>
      {trendingFilms.map(film => {
        return (
          <ListItem key={film.id}>
            <LinkItem to={`/movies/${film.id}`} state={{ from: location }}>
              {film.title}
            </LinkItem>
          </ListItem>
        );
      })}
    </>
  );
};

export default TrendingFilmsList;
