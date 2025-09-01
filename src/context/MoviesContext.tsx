import React, { createContext, useState, useContext, type ReactNode } from "react";
import { type Movie } from '../types/Movie';
import { GetMovies, SaveMovies } from '../services/localStorageService';

interface MovieContextType {
  watched: Movie[];
  addWatched: (movie: Movie) => void;
}

export const MoviesContext = createContext<MovieContextType | undefined>(undefined);

export const MoviesProvider = ({ children }: { children: ReactNode }) => {

  const [watched, setWatched] = useState<Movie[]>(() => {
    try {
      return GetMovies();
    } catch (error) {
      console.error('Error loading movies from localStorage:', error);
      return [];
    }
  });

  const addWatched = (movie: Movie) => {
    const newWatched = [...(watched || [])];

    const existingMovie: Movie | undefined = newWatched.find(x => x.id == movie.id);

    if (existingMovie) {
      const index = newWatched.indexOf(existingMovie);
      newWatched[index] = movie;
    } else {
      newWatched.push(movie);
    }

    updateWatched(newWatched);
  };

  const updateWatched = (newWatched: Movie[]) => {
    setWatched(newWatched);
    SaveMovies(newWatched);
  }

  return (
    <MoviesContext.Provider value={{ watched, addWatched }}>
      {children}
    </MoviesContext.Provider>
  );
};

export function useMovies() {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error("useMovies deve ser usado dentro de um MoviesProvider");
  }
  return context;
}
