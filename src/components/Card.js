import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { ReactComponent as Info } from 'assets/info.svg';
import { ReactComponent as Add } from 'assets/plus.svg';
import Share from 'assets/share.svg';

function Card({ movies }) {
  return (
    <Container>
      {movies.map((movie) => (
        <div>
          <StyledLink to={`/movie/${movie.id}`} key={movie.id}>
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
              <ButtonWrapper>
                <Button>
                  <Info width="14" height="14" fill="black" />
                  <Text>View More</Text>
                </Button>
                <AddBtn>
                  <Add fill="#808080" />
                  <div>Add to My List</div>
                </AddBtn>
              </ButtonWrapper>
            </Right>
          </StyledLink>
        </div>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: white;
  }

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

const Text = styled.div`
  margin-left: 5px;
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

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 8px;
  background-color: white;
  border: none;
  border-radius: 2px;
  height: 30px;
  font-size: 13px;
  font-weight: 600;
  color: #252529;

  :hover {
    background-color: #d8d8d8;
  }

  img {
    margin-right: 5px;
    height: 12px;
    width: 10px;
  }
`;

const AddBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 10px;
  color: #808080;
  border-radius: 2px;
  outline: 0;
  border: 0;
  font-size: 14px;
  font-weight: 500;
  height: 30px;
  background-color: #1d1d1d;

  div {
    display: inline;
    margin-left: 8px;
  }

  svg {
    width: 14px;
  }

  :hover svg {
    fill: white;
  }

  :hover {
    color: white;
  }
`;

export default Card;
