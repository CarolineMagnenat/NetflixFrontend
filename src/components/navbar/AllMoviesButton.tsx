import { Link } from "react-router-dom";

const MoviesButton = () => {
  return (
    <Link
      to="/movies" // Länkar till sidan med alla filmer
      style={{
        textDecoration: "none",
      }}
      aria-label="Gå till alla filmer"
    >
      <button className="">Movies</button>
    </Link>
  );
};

export default MoviesButton;
