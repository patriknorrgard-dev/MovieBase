import { Link } from "react-router";
import type { Movie } from "../../../types/Movie.types";

interface MovieCardProps {
  item: Movie;
  size?: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ item, size }) => {
  return (
    <Link to={`/movie/${item.id}`}>
      <img
        src={`https://image.tmdb.org/t/p/w342/${item.poster_path}`}
        alt=""
        className={`block px-2 ${size}`}
      />
    </Link>
  );
};


export default MovieCard;