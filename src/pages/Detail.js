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
        <Left>
          <img src={movie.medium_cover_image} alt="background_" />
          <AddBtn>Add to My List</AddBtn>
          <ShareBtn>Share</ShareBtn>
        </Left>
        <Right>
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
            <Bold>Genres</Bold>
            {movie.genres &&
              movie.genres.map((genre, index) => (
                <>
                  <li>{genre} </li>
                  {index !== movie.genres.length - 1 && <Bar>|</Bar>}
                </>
              ))}
          </Genre>
          <Description>{movie.description_intro}</Description>
        </Right>
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
  background-image: linear-gradient(to Right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1)),
    url(${(props) => props.movie.background_image_original});
  background-size: cover;
  padding: 100px 0px;
`;

const Background = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  max-width: 800px;
  padding: 50px 50px;
  border-radius: 10px;
`;

const Left = styled.div`
  img {
    margin-bottom: 15px;
  }
  button {
    display: block;
    margin-bottom: 10px;
    background-color: #171717;
    color: white;
    border-radius: 5px;
    outline: 0;
    border: 0;
    padding: 10px 15px;
    font-size: 16px;

    :hover {
      background-color: #202020;
    }
  }
`;

const AddBtn = styled.button``;
const ShareBtn = styled.button``;

const Right = styled.div`
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
  padding: 0px 20px 20px 0px;
  line-height: 1.2;
  color: white;
`;

const Rating = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: white;
  margin-right: 5px;
`;

const Year = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: white;
  margin-right: 5px;
`;

const Runtime = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: white;
  margin-right: 5px;
`;

const Genre = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: white;
  margin-right: 5px;

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
