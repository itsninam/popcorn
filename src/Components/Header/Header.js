import Logo from "./Logo";
import Results from "./Results";
import SearchMovies from "./SearchMovies";

const Header = ({ movies }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <SearchMovies />
      <Results movies={movies} />
    </nav>
  );
};

export default Header;
