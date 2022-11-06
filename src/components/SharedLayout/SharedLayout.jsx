import { Container, Link } from './SharedLayout-styled';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <Container>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Container>
      <Outlet />
    </>
  );
};

export default SharedLayout;
