import React, { createContext, useState, useContext, type ReactNode } from "react";
import { type Movie } from '../types/Movie';
// import { GetCart, SaveCart } from '../services/localstorageService';

interface MovieContextType {
  watched: Movie[];
  addWatched: (movie: Movie) => void;
}

export const MoviesContext = createContext<MovieContextType | undefined>(undefined);

export const MoviesProvider = ({ children }: { children: ReactNode }) => {

  const [watched, setWatched] = useState<Movie[]>([]/*() => {
    // Get cart from localStorage on initialization
    try {
      return GetCart();
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      return {};
    }
  }*/);

  const addWatched = (movie: Movie) => {
    const newWatched = [...(watched || [])];

    if (!newWatched.find(x => x.id == movie.id)) {
      newWatched.push(movie);
    }

    updateWatched(newWatched);
  };

  const updateWatched = (newWatched: Movie[]) => {
    setWatched(newWatched);
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
