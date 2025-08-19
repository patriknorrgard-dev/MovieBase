import { Link } from "react-router";
import type { Movie } from "../../types/Movie.types";

interface MovieListCardProps {
  movies: Movie[];
}

const MovieListCard: React.FC<MovieListCardProps> = ({ movies }) => {
  return (
    <div className="grid grid-cols-2 pt-3 px-2 gap-5 sm:px-0 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {movies.map(movie => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <img
            className="w-full rounded-r-3xl"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
          />
        
          <div className="px-0 py-1 pb-5">
            <h2 className="font-bold text-gray-200">{movie.title}</h2>
            <div className="flex justify-between">
              <p className="text-gray-400 text-sm">{movie.release_date}</p>
              <p className="text-gray-400 text-sm">Votes({movie.vote_count})</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default MovieListCard;