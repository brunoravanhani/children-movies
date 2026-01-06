import { type Movie } from '../types/Movie';

export async function getMovies(): Promise<Movie[]> {
  const response = await fetch("https://ti5wwcm55rmbifh5nzhrvxijda0ciiqo.lambda-url.us-east-1.on.aws/");

  if (!response.ok) {
    throw new Error(`Error when consuming API: ${response.status}`);
  }

  return await response.json();
}
