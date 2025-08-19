import type React from "react";
import type { Movie } from "../../types/Movie.types";
import { dateFormatter } from "../../utils/dateFormatter";
import { Link } from "react-router";

interface SearchResultProps {
  movies: Movie[];
}

const SearchResult: React.FC<SearchResultProps> = ({ movies }) => {
  return (
    <>
      {movies.map(movie => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <div className="grid grid-cols-3 gap-5 mb-5 sm:grid-cols-4 sm:gap-10 sm:mb-10 lg:grid-cols-5 lg:gap-16 lg:px-0 bg-dark-gradient">
            <img 
              src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} 
              alt=""
              className="w-full sm:w-48 h-auto lg:w-full"
            />

            <div className="col-span-2 sm:col-span-3 lg:col-span-3 sm:mt-0 sm:pt-3 lg:p-4 lg:mt-0">
              <h2 className="text-sm sm:text-2xl lg:text-4xl font-bold text-gray-300">{movie.title}</h2>
              <p className="text-gray-300">{movie.status} {dateFormatter(movie.release_date)}</p>
              <p className="hidden sm:block text-1xl text-gray-300 pt-5">{movie.overview}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}

export default SearchResult;