import Api from 'services/API';
import { useParams, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { ReviewsListItem, ReviewsTitle } from './Reviews-styled';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    async function getByReviewsId() {
      try {
        const movieReviewsById = (await Api.getReviewsById(id)).results;
        const filteredReviewsById = movieReviewsById.map(film => {
          return {
            author: film.author,
            content: film.content,
            id: film.id,
          };
        });
        setMovieReviews(filteredReviewsById);
      } catch (error) {
        throw new Error(error);
      } finally {
      }
    }
    getByReviewsId();
  }, [id]);
  return (
    <>
      <ul>
        {movieReviews.length > 0 ? (
          movieReviews.map(review => {
            return (
              <ReviewsListItem key={review.id}>
                <ReviewsTitle>Author: {review.author}</ReviewsTitle>
                <p>{review.content}</p>
              </ReviewsListItem>
            );
          })
        ) : (
          <p>There is no reviews </p>
        )}
      </ul>
    </>
  );
};

export default Reviews;
