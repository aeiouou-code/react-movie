/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Card({ movies }) {
  return (
    <Link to={{ pathname: '/movie-detail', state: movies }}>
      {movies.map((movie) => (
        <Box key={movie.id}>
          <Left>
            <img src={movie.medium_cover_image} alt={movie.title} />
          </Left>
          <Right>
            <Title>{movie.title}</Title>
            <ul>
              {movie.genres.map((genre) => (
                <li>{genre}</li>
              ))}
            </ul>
            <Year>{movie.year}</Year>
            {movie.summary ? <Summary>{movie.summary}</Summary> : null}
            <Button>
              <img src="/images/play_arrow.svg" alt="" />
              Play
            </Button>
          </Right>
        </Box>
      ))}
    </Link>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  width: 480px;
  margin: 15px;
  background-color: #1d1d1d;
  padding: 20px;
  border-radius: 5px;
  color: white;
  box-shadow: rgba(0, 0, 0, 1) 0px 5px 15px;
`;

const Left = styled.div`
  padding-right: 20px;
  img {
    height: 200px;
    border-radius: 5px;
  }
`;

const Right = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    font-size: 13px;
  }

  li {
    margin-right: 5px;
    max-width: 85px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: gray;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 8px;
  line-height: 1.2;
`;

const Summary = styled.div`
  height: 60px;
  max-width: 280px;
  display: -webkit-box;
  font-size: 14px;
  font-weight: 300;
  white-space: normal;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 15px;
  line-height: 1.4;
  /* text-overflow: ellipsis; */
`;

const Year = styled.div`
  margin-bottom: 15px;
  font-size: 13px;
  color: #8c8c8c;
`;

const Button = styled.button`
  border: none;
  border-radius: 2px;
  width: 60px;
  height: 30px;
  font-size: 13px;
  font-weight: 600;
  color: #252529;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: white;

  :hover {
    background-color: #d8d8d8;
  }

  img {
    margin-right: 5px;
    height: 12px;
  }
`;

export default Card;
