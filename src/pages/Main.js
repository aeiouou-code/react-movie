import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

function Main() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, []);
  return (
    <Container>
      <div>{loading ? <Loading>Loading...</Loading> : <Card movies={movies} />}</div>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  padding: 50px 0px;
`;

const Loading = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  color: white;
`;
export default Main;
