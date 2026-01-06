import './App.css';
import { MovieList } from './components/MovieList';
import { EditMovie } from './components/EditMovie';
import { MoviesProvider } from './context/MoviesContext';
import { Routes, Route } from "react-router";

function App() {

  return (
    <MoviesProvider>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie" element={<EditMovie />} />
      </Routes>
    </MoviesProvider>
  )
}

export default App
