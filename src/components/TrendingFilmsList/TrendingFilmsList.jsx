import { ListItem, LinkItem } from './TrendingFilmsList-styled';

const TrendingFilmsList = ({ trendingFilms }) => {
  return (
    <>
      {trendingFilms.map(film => {
        return (
          <ListItem key={film.id}>
            <LinkItem to={`/movies/${film.id}`}>{film.title}</LinkItem>
          </ListItem>
        );
      })}
    </>
  );
};

export default TrendingFilmsList;
