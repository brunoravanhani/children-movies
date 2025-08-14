import { type Movie } from '../types/Movie';

export function GetMovies() : Movie[] {
    const savedMovies = localStorage.getItem('movie');
    return savedMovies ? JSON.parse(savedMovies) : [];
}

export function SaveMovies(movies: Movie[]) {
    localStorage.setItem('movie', JSON.stringify(movies));
}
