import { useQueries, useSuspenseQueries } from "@tanstack/react-query";
import { getTrailers } from "../services/TMDB_API";
import Carousel from "../components/Carousel/Carousel";
import MovieCard from "../components/Carousel/Cards/MovieCard";
import TrailerCard from "../components/Carousel/Cards/TrailerCard";
import { Suspense } from "react";
import Spinner from "../components/Spinner";
import { popularMoviesOptions, ratedMoviesOptions, theatreMoviesOptions } from "../hooks/useMovies";

const HomePage = () => {

  const [popular, rated, theatre] = useQueries({ 
    queries: [
      popularMoviesOptions(), 
      ratedMoviesOptions(),
      theatreMoviesOptions(),
    ], 
  });

  const combinedQueries = useSuspenseQueries({
    queries: theatre.data?.results.map((movie) => ({
      queryKey: ["trailer", movie.id],  
      queryFn: () => getTrailers(movie.id),
    })) ?? [],
    combine: (results) => {
      return {
        data: results.map(result => result.data.results[0]),
      }
    },
  })

  return (
    <div className="flex flex-col gap-10">

      {combinedQueries && (
        <>
          <h2 className="text-gray-300 text-4xl px-2">Now in theatre</h2>
          <div className="h-[320px]">
            <Suspense fallback={<Spinner />}>
              <Carousel 
                data={combinedQueries.data}
                Card={TrailerCard}
              />
            </Suspense>
          </div>
        </>
      )}

      {popular.data && (
        <>
          <h2 className="text-gray-300 text-4xl px-2">Popular Movies</h2>
          <div className="h-[320px]">
            <Carousel 
              data={popular.data.results}
              Card={MovieCard}
            />
          </div>
        </>
      )}
      
      {rated.data && (
        <>
          <h2 className="text-gray-300 text-4xl px-2">Highest Rated Movies</h2>
          <div className="h-[320px]">
            <Carousel 
              data={rated.data.results}
              Card={MovieCard}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default HomePage;