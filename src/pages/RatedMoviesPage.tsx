import { getTopRated } from "../services/TMDB_API"
import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query"
import ErrorAlert from "../components/ErrorAlert";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";
import MovieListCard from "../components/movie/MovieListCard";

const RatedMoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const { data: movies, error, isError, isLoading } = useQuery({
    queryKey: (["ratedMovies", currentPage]),
    queryFn: () => getTopRated(currentPage),
  })

  return (
    <>
      {isError && <ErrorAlert message={error.message} />}

      {isLoading && <Spinner />}

      {movies && (
        <div className="mt-10">
          <title>Rated Movies</title>
          
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

export default RatedMoviesPage;