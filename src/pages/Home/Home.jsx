import TrendingFilmsList from 'components/TrendingFilmsList/TrendingFilmsList';
import { Title, Section } from './Home-styled';

const Home = ({ trendingFilms }) => {
  return (
    <Section>
      <Title>Trending today</Title>
      <ul>
        <TrendingFilmsList trendingFilms={trendingFilms} />
      </ul>
    </Section>
  );
};

export default Home;
