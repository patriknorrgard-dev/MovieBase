import { useQueries, useSuspenseQueries } from "@tanstack/react-query";
import { getTrailers } from "../services/TMDB_API";
import Carousel from "../components/carousel/Carousel";
import MovieCard from "../components/carousel/cards/MovieCard";
import TrailerCard from "../components/carousel/cards/TrailerCard";
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

  const trailers = useSuspenseQueries({
    queries: theatre.data?.results.map((movie) => ({
      queryKey: ["trailer", movie.id],  
      queryFn: () => getTrailers(movie.id),
    })) ?? [],
    combine: (results) => {
      return {
        data: results
        .map(result => result.data.results[0])
        .filter(Boolean),
      }
    },
  })

  return (
    <div className="flex flex-col gap-40 pt-15">

      {trailers && (
        <section className="h-[400px]">
          <h2 className="text-gray-300 text-4xl px-2 pb-5">Now in theatre</h2>
            <Suspense fallback={<Spinner />}>
              <Carousel 
                data={trailers.data}
                Card={TrailerCard}
              />
            </Suspense>
        </section>
      )}

      {popular.data && (
        <section className="h-[300px]">
          <h2 className="text-gray-300 text-4xl px-2 pb-5">Popular Movies</h2>
            <Carousel 
              data={popular.data.results}
              Card={MovieCard}
            />
        </section>
      )}
      
      {rated.data && (
        <section className="h-[300px]">
          <h2 className="text-gray-300 text-4xl px-2 pb-5">Highest Rated Movies</h2>
            <Carousel 
              data={rated.data.results}
              Card={MovieCard}
            />
        </section>
      )}
    </div>
  )
}

export default HomePage;