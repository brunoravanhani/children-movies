import { useEffect, useState, useMemo } from "react";
import { type Movie } from '../types/Movie';
import { getMovies } from '../services/moviesService';
import { MovieCard } from './MovieCard';
import { useMovies } from '../context/MoviesContext';
import { StreamModal } from './StreamModal';
import { Filters, type FilterGenre } from './Filters';
import { Spinner } from './Spinner';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { getAccessCodeUrl } from '../shared/googleApiHelper';

export const MovieList = () => {

  const { addWatched, watched } = useMovies();

  const [movies, setMovies] = useState<Movie[]>([]);

  const [currentMovie, setCurrentMovie] = useState<Movie | undefined>(undefined);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [searchFilter, setSearchFilter] = useState("");

  const [typeFilter, setTypeFilter] = useState<string[]>(['animated-movie', 'serie', 'live-action']);

  const [watchFilter, setWatchFilter] = useState(false);

  const [isLoaded, setIsLoaded] = useState(false);

  const accessCodeUrl = getAccessCodeUrl(import.meta.env.VITE_APP_URL, import.meta.env.VITE_CLIENT_ID);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies();

      setIsLoaded(true);

      watched.forEach(m => {
        const indexMovie = data.findIndex(x => x.id == m.id);
        if (indexMovie >= 0) {
          data[indexMovie].watchedDate = m.watchedDate;
        }
      });

      setMovies(data);
    }

    fetchMovies();
  }, []);

  const filteredMovies: Movie[] = useMemo(() => {

    return movies.filter((m) => {
      return (
        (searchFilter == '' || m.name.toLowerCase().includes(searchFilter))
        &&
        (typeFilter.includes(m.type))
        &&
        (!watchFilter || !!m.watchedDate)
      );
    }).sort(sortMovies);
  }, [movies, searchFilter, typeFilter, watchFilter]);

  const watchMovie = (id : string) => {
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

  const onSearch = (search: string) => {
    setSearchFilter(search);
  }

  const onType = (type: FilterGenre) => {
    const types = [];

    if (type.animation)
        types.push('animated-movie');
    if (type.serie)
        types.push('serie');
    if (type.liveAction)
        types.push('live-action');

    setTypeFilter(types);

    setWatchFilter(type.watched);
  }

  return (
    <>
      <div>
        <a href={accessCodeUrl}><UserCircleIcon className="size-8 inline"/> Login com Google</a>
      </div>

      <h1 className="text-3xl lg:text-4xl font-bold mt-6 mb-6 text-center">🎬 Lista de Filmes</h1>

      <Filters onSearch={onSearch} onType={onType}/>

      {(!isLoaded && !filteredMovies.length) && <Spinner />}

      {
        (!!filteredMovies.length)
        &&
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {(filteredMovies || []).map(movie => (<MovieCard movie={movie} key={movie.id} watch={watchMovie}></MovieCard>))}

        </div>
      }

      <StreamModal isOpen={isModalOpen} streams={currentMovie?.streams} onClose={onCloseModal} onClickStream={onClickStream}/>
    </>
  )
}

const sortMovies = (a: Movie, b: Movie) : number => {

  return (b.year ?? -Infinity) - (a.year ?? -Infinity);
}
