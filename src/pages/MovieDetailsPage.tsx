import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getMovieDetails } from "../services/TMDB_API";
import ErrorAlert from "../components/ErrorAlert";
import Spinner from "../components/Spinner";
import MovieDetails from "../components/movie/MovieDetails";

const MovieDetailsPage = () => {
  const { id } = useParams();
  
  const { data: movie, error, isError, isLoading } = useQuery({
    queryKey: ["details"],
    queryFn: () => getMovieDetails(Number(id)),
  })

  return (
    <>
      {isError && <ErrorAlert message={error.message} />}

      {isLoading && <Spinner />}
    
      {movie && <MovieDetails movie={movie} />}
    </>
  )
}

export default MovieDetailsPage;