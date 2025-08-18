import axios from "axios";
import type { Movie, MovieResponse } from "../types/Movie.types";
import type { GenreResponse } from "../types/Genre.types";
import type { PersonResponse } from "../types/Person.types";
import type { TrailerResponse } from "../types/Trailer.types";

interface PageResult {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number
}

const API_KEY = import.meta.env.VITE_TMDB_API_KEY as string;
const BASE_URL = import.meta.env.VITE_BASE_URL as string;

const instance = axios.create({
  baseURL: BASE_URL,
  params: { 
    api_key: API_KEY,
  },
});

export const getTopRated = async (pageNumber: number) => {
  const res = await instance.get<PageResult>("/movie/top_rated", {
    params: {
      page: pageNumber,
    }
  });
  return res.data;
}

export const getPopular = async (pageNumber: number) => {
  const res = await instance.get<PageResult>("/movie/popular", {
    params: {
      page: pageNumber,
    }
  });
  return res.data;
}

export const searchMovie = async (searchQuery: string, pageNumber: number) => {
  const res = await instance.get<PageResult>("/search/movie", {
    params: {
      query: searchQuery,
      page: pageNumber,
    }
  });
  return res.data;
}

export const getGenres = async () => {
  const res = await instance.get<GenreResponse>("/genre/movie/list");
  return res.data.genres;
}

export const getMovieDetails = async (movieId: number) => {
  const res = await instance.get<MovieResponse>(`/movie/${movieId}`, {
    params: {
      append_to_response: "credits",
    }
  });
  return res.data;
}

export const getPersonDetails = async (personId: number) => {
  const res = await instance.get<PersonResponse>(`/person/${personId}`, {
    params: {
      append_to_response: "credits,images",
    }
  });
  return res.data;
}

export const getByGenre = async (movieId: number, pageNumber: number) => {
  const res = await instance.get<PageResult>("/discover/movie", {
    params: {
      with_genres: movieId,
      page: pageNumber,
    }
  });
  return res.data;
}

export const getTrailers = async (movieId: number) => {
  const res = await instance.get<TrailerResponse>(`/movie/${movieId}/videos`);
  return res.data;
}

export const getInTheatres = async (limit = 12) => {
  const res = await instance.get<PageResult>(`/movie/now_playing`);
  return { 
    ...res.data, 
    results: res.data.results.slice(0, limit) 
  };
}