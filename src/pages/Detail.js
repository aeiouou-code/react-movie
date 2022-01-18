import react, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components/macro';

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <Container movie={movie}>
      <Background>
        <Top>
          <img src={movie.medium_cover_image} alt="background_" />
        </Top>
        <Bottom>
          <Title>{movie.title}</Title>
          <Rating>
            <Bold>Rating</Bold> {movie.rating}
          </Rating>
          <Year>
            <Bold>Year</Bold> {movie.year}
          </Year>
          <Runtime>
            <Bold>Running Time</Bold> {movie.runtime}m
          </Runtime>
          <Genre>
            <Bold>Genre</Bold>
            {movie.genres &&
              movie.genres.map((genre, index) => (
                <>
                  <li>{genre} </li>
                  {index !== movie.genres.length - 1 && <Bar>|</Bar>}
                </>
              ))}
          </Genre>
          <Description>{movie.description_intro}</Description>
        </Bottom>
      </Background>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  background-color: black;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)),
    url(${(props) => props.movie.background_image_original});
  background-size: cover;
  padding: 100px 0px;
`;

const Background = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  max-width: 900px;
  padding: 0px 100px;
`;

const Top = styled.div``;

const Bottom = styled.div`
  margin-left: 50px;
`;

const Bold = styled.div`
  font-weight: 600;
  color: white;
  display: inline;
  margin-right: 10px;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
  padding-bottom: 20px;
  line-height: 1.2;
  color: white;
`;

const Rating = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: white;
  margin-bottom: 5px;
`;

const Year = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: white;
  margin-bottom: 5px;
`;

const Runtime = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: white;
  margin-bottom: 5px;
`;

const Genre = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: white;
  margin-bottom: 5px;

  li {
    display: inline;
  }
`;

const Bar = styled.div`
  display: inline;
  margin-right: 5px;
  font-weight: 300;
`;

const Description = styled.div`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  color: #cccccc;
  margin-top: 15px;
`;

export default Detail;
