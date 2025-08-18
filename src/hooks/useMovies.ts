import { queryOptions } from "@tanstack/react-query";
import { getInTheatres, getPopular, getTopRated } from "../services/TMDB_API";

export const popularMoviesOptions = () => {
  return queryOptions({
    queryKey: ["movies", "popular"],
    queryFn: () => getPopular(1),
  })
}

export const ratedMoviesOptions = () => {
  return queryOptions({
    queryKey: ["movies", "topRated"],
    queryFn: () => getTopRated(1),
  })
}

export const theatreMoviesOptions = () => {
  return queryOptions({
    queryKey: ["movies", "theatre"],
    queryFn: () => getInTheatres(6),
  })
}