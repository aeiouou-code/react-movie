/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

function Card({ movies }) {
  return (
    <Container>
      {movies.map((movie, index) => (
        <div key={index}>
          <h2>{movie.title}</h2>
          <img src={movie.medium_cover_image} alt={movie.title} />
          <p>{movie.summary}</p>
          <ul>
            {movie.genres.map((genre) => (
              <li>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

export default Card;
