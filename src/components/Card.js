/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

function Card({ movies }) {
  return (
    <Container>
      {movies.map((movie, index) => (
        <Box key={index}>
          <Left>
            <img src={movie.medium_cover_image} alt={movie.title} />
          </Left>
          <Right>
            <Title>{movie.title}</Title>
            <Summary>{movie.summary}</Summary>
            <ul>
              {movie.genres.map((genre) => (
                <li>{genre}</li>
              ))}
            </ul>
          </Right>
        </Box>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  width: 450px;
  margin: 10px 0px;
`;

const Left = styled.div`
  padding-right: 20px;
  img {
    height: 200px;
  }
`;

const Right = styled.div``;

const Title = styled.h1`
  font-size: 25px;
  font-weight: 600;
  padding-bottom: 15px;
`;

const Summary = styled.div`
  height: 50px;
  display: -webkit-box;
  font-size: 16px;
  white-space: normal;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 10px;
  /* text-overflow: ellipsis; */
`;

export default Card;
