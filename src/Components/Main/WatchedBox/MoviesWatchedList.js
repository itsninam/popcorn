import WatchedMovie from "./WatchedMovie";

const MoviesWatchedList = ({ watched }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default MoviesWatchedList;
