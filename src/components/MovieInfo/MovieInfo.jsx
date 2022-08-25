import Genres from 'components/Genres';

const MovieInfo = ({ movie }) => {
  return (
    <div>
      <img
        src={
          movie.poster_path
            ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path
            : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
        }
        alt="movie.title"
        width="100px"
      />
      <div>
        <h3>
          {movie.title} {'  '}
          <span>{movie.release_date}</span>
        </h3>
        <div>
          Rating:
          <span>{movie.vote_average}</span>
        </div>
        <div>Overview: {movie.overview}</div>
        <div>
          Genres:
          {<Genres movieGenres={movie.genres} />}
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
