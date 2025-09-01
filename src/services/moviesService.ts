import { type Movie } from '../types/Movie';

interface FetchMoviesType {
  data: Movie[]
}

export async function getMovies(): Promise<Movie[]> {
  const response = await fetch("https://zxn66daqepwmayver5cwxkt4qu0vubsc.lambda-url.us-east-1.on.aws/");

  if (!response.ok) {
    throw new Error(`Error when consuming API: ${response.status}`);
  }

  const data: FetchMoviesType = await response.json();
  return data.data;
}
