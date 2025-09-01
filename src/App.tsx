import './App.css';
import { MovieList } from './components/MovieList';
import { MoviesProvider } from './context/MoviesContext';

function App() {

  return (
    <MoviesProvider>
      <MovieList/>
    </MoviesProvider>
  )
}

export default App
