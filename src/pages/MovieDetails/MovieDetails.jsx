import { useParams } from 'react-router-dom';
import Api from '../../services/API';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Circles } from 'react-loader-spinner';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import {
  Container,
  Img,
  MaineTitle,
  Title,
  Text,
  GenresList,
  GenresListItem,
  Section,
  AdditionalLinkItem,
  AdditionalListItem,
  AdditionaText,
  AdditionalList,
  LinkToBack,
} from './MovieDetails-styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [loader, setLoader] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const { id } = useParams();

  useEffect(() => {
    if (movieDetails === []) {
      return;
    }
    async function getFilmById() {
      setLoader(false);
      try {
        const movieDetailsById = await Api.getDetailsById(id);
        setMovieDetails(movieDetailsById);
        setLoader(true);
      } catch (error) {
        throw new Error(error);
      } finally {
      }
    }
    getFilmById();
  }, [id]);

  const mainImglink =
    'https://image.tmdb.org/t/p/w500/' + movieDetails.poster_path;

  return (
    <Section>
      {loader === true ? (
        <Container>
          <LinkToBack to={backLinkHref}>BACK</LinkToBack>
          <Img src={mainImglink} alt="id" width="300px"></Img>
          <div>
            <MaineTitle>{movieDetails.title}</MaineTitle>
            <Text>
              User Score: {Math.round(movieDetails.vote_average * 10)}%
            </Text>
            <Title>Overview</Title>
            <Text>{movieDetails.overview}</Text>
            <Title>Genres</Title>
            <GenresList>
              {movieDetails.genres.map(genre => {
                return (
                  <GenresListItem key={genre.name}>{genre.name}</GenresListItem>
                );
              })}
            </GenresList>
          </div>
        </Container>
      ) : (
        <Circles
          height="80"
          width="80"
          color="orangered"
          ariaLabel="circles-loading"
          wrapperStyle={{
            justifyContent: 'center',
          }}
          wrapperClass=""
          visible={true}
        />
      )}
      <AdditionaText>Additional infornation </AdditionaText>
      <AdditionalList>
        <AdditionalListItem>
          <AdditionalLinkItem to="cast" state={{ from: location.state?.from }}>
            Cast
          </AdditionalLinkItem>
        </AdditionalListItem>
        <AdditionalListItem>
          <AdditionalLinkItem
            to="reviews"
            state={{ from: location.state?.from }}
          >
            Reviews
          </AdditionalLinkItem>
        </AdditionalListItem>
      </AdditionalList>
      <Outlet />
    </Section>
  );
};

export default MovieDetails;
