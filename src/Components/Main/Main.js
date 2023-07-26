import MoviesBox from "./MoviesBox/MoviesBox";
import MoviesWatchedSummary from "./WatchedBox/MoviesWatchedSummary";
import WatchedBox from "./WatchedBox/WatchedBox";

const Main = ({ movies }) => {
  return (
    <>
      <main className="main">
        <MoviesBox movies={movies} />
        <WatchedBox />
      </main>
    </>
  );
};

export default Main;
