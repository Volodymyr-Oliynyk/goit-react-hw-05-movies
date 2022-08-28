import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Item = styled.li`
  margin-bottom: 10px;
`;

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ id, poster_path }) => {
        return (
          <Item key={id}>
            <Link to={`/movie/${id}`} state={{ from: location }}>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500` + poster_path
                    : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
                }
                alt={''}
              />
            </Link>
            {/* <p>{movie.title}</p> */}
          </Item>
        );
      })}
    </List>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
