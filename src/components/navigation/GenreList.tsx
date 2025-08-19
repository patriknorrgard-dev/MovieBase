import { useQuery } from "@tanstack/react-query";
import { getGenres } from "../../services/TMDB_API";
import ErrorAlert from "../ErrorAlert";
import Spinner from "../Spinner";
import { Link } from "react-router";

interface GenreListProps {
  onGenreSelect: () => void;
}

const GenreList: React.FC<GenreListProps> = ({ onGenreSelect }) => {
  const { data: genres, error, isError, isLoading } = useQuery({
    queryKey: ["genres"],
    queryFn: () => getGenres(),
  })

  return (
    <>
      {isError && <ErrorAlert message={error.message} />}

      {isLoading && <Spinner />}

      {genres && (
      <div className="w-full bg-transparent">
        <div
          className="max-w-screen-xl h-[500px] lg:h-auto overflow-y-auto mx-auto flex flex-col lg:flex-row lg:flex-wrap justify-start gap-5 lg:gap-4 px-8 lg:px-0 lg:text-center py-5 lg:bg-black"
        >
          {genres.map((genre) => (
            <div key={genre.id} className="text-sm lg:text-base lg:basis-28">
              <Link to={`/movie/genre/${genre.id}`} onClick={onGenreSelect}>
                {genre.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
      )}
    </>
  )
}

export default GenreList;