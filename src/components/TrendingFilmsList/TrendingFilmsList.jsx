import { ListItem, LinkItem } from './TrendingFilmsList-styled';
import { useLocation } from 'react-router-dom';

const TrendingFilmsList = ({ trendingFilms }) => {
  const location = useLocation();

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
