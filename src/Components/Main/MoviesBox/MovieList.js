import Movie from "./Movie";

const MovieList = ({ movies, handleSelectMovie }) => {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie
          key={movie.imdbID}
          movie={movie}
          handleSelectMovie={handleSelectMovie}
        />
      ))}
    </ul>
  );
};

export default MovieList;
