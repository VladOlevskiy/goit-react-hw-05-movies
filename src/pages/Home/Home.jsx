import TrendingFilmsList from 'components/TrendingFilmsList/TrendingFilmsList';
import { Title, Section } from './Home-styled';

const Home = () => {
  return (
    <Section>
      <Title>Trending today</Title>
      <ul>
        <TrendingFilmsList />
      </ul>
    </Section>
  );
};

export default Home;
