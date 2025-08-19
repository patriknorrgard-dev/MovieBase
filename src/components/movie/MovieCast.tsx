import { Link } from "react-router";
import type { Credits } from "../../types/Credits.types";
import type { Person } from "../../types/Person.types";

interface MovieCastProps {
  movies: Credits<Person>;
}

const MovieCast: React.FC<MovieCastProps> = ({ movies }) => {
  return (
    <div className="flex">
      {movies.cast.slice(0,4).map(movie => (
        <div key={movie.id} className="p-2 lg:p-5">  
          <Link to={`/person/${movie.id}`}>
            <img 
              src={`https://image.tmdb.org/t/p/w92/${movie.profile_path}`} 
              alt="" 
              className="w-14 h-14 lg:w-24 lg:h-24 rounded-full object-cover mx-auto"
            />
            <p className="mt-2 font-bold text-xs lg:text-md text-gray-300 text-center">{movie.name}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default MovieCast;