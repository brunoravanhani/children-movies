import React, { useEffect, useState } from "react";
import { type Movie } from '../types/Movie';
import { getMovies } from '../services/moviesService';
import { MovieCard } from './MovieCard';

export const MovieList = () => {

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies();

      setMovies(data);
    }

    fetchMovies();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center">🎬 Lista de Filmes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {(movies || []).map(movie => (<MovieCard movie={movie} key={movie.id}></MovieCard>))}

      </div>
      <ul>
      </ul>
    </>
  )
}
