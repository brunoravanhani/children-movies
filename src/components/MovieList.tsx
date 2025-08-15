import React, { useEffect, useState } from "react";
import { type Movie } from '../types/Movie';
import { getMovies } from '../services/moviesService';
import { MovieCard } from './MovieCard';
import { MoviesContext, useMovies } from '../context/MoviesContext';
import { StreamModal } from './StreamModal';

export const MovieList = () => {

  const { addWatched, watched } = useMovies();

  const [movies, setMovies] = useState<Movie[]>([]);

  const [currentMovie, setCurrentMovie] = useState<Movie | undefined>(undefined);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies();

      watched.forEach(m => {
        const indexMovie = data.findIndex(x => x.id === m.id);
        if (indexMovie >= 0) {
          data[indexMovie].watchedDate = m.watchedDate;
        }
      });

      setMovies(data);
    }

    fetchMovies();
  }, []);

  const watchMovie = (id : number) => {
    const movie = movies.find(m => m.id === id);

    if (!movie) return;

    if (movie.streams.length === 1) {
      movie.watchedDate = new Date().toISOString();
      addWatched(movie);
      window.open(movie.streams[0].link, '_blank');
      return;
    }

    setCurrentMovie(movie);
    setIsModalOpen(true);

  }

  const onCloseModal = () => {
    setIsModalOpen(false);
  }

  const onClickStream = () => {
    setIsModalOpen(false);

    if (!currentMovie)
      return;

    currentMovie.watchedDate = new Date().toISOString();
    addWatched(currentMovie);

  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center">🎬 Lista de Filmes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {(movies || []).map(movie => (<MovieCard movie={movie} key={movie.id} watch={watchMovie}></MovieCard>))}

      </div>

      <StreamModal isOpen={isModalOpen} streams={currentMovie?.streams} onClose={onCloseModal} onClickStream={onClickStream}/>
    </>
  )
}
