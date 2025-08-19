import { useQuery } from "@tanstack/react-query";
import { getByGenre } from "../services/TMDB_API";
import { useParams, useSearchParams } from "react-router";
import ErrorAlert from "../components/ErrorAlert";
import Spinner from "../components/Spinner";
import MovieListCard from "../components/movie/MovieListCard";
import Pagination from "../components/Pagination";

const MoviesByGenrePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const { id } = useParams();
  
  const { data: movies, error, isError, isLoading } = useQuery({
    queryKey: (["MoviesByGenre", id, currentPage]),
    queryFn: () => getByGenre(Number(id), currentPage),
  })

  return (
    <>
      {isError && <ErrorAlert message={error.message} />}

      {isLoading && <Spinner />}

      {movies && (
        <div className="mt-10">

          <MovieListCard movies={movies.results} />

          <Pagination 
            firstPage={currentPage === 1}
            lastPage={currentPage === movies.total_pages}
            currentPage={movies.page}
            totalPages={movies.total_pages}
            onPrevPage={() => setSearchParams({ page: (currentPage - 1).toString() }) }
            onNextPage={() => setSearchParams({ page: (currentPage + 1).toString() }) }
          />
        </div>
      )}
    </>
  )
}

export default MoviesByGenrePage;