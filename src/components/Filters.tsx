import { useState } from "react";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { ToggleButton } from './ToggleButton';

type FiltersPropsType = {
  onSearch: (search: string) => void
  onType: (type: FilterGenre) => void
}

export interface FilterGenre {
  liveAction: boolean,
  animation: boolean,
  serie: boolean,
  watched: boolean
}


export const Filters = ({onSearch, onType} : FiltersPropsType) => {

  const [search, setSearch] = useState("");
  const [liveAction, setLiveAction] = useState(true);
  const [animation, setAnimation] = useState(true);
  const [serie, setSerie] = useState(true);
  const [watched, setWatched] = useState(false);

  const onChangeSearch = (e: any) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  }

  const onChangeAnimation = () => {
    const types = {
      liveAction, animation: !animation, serie, watched
    };

    setAnimation(!animation);

    onType(types);
  }

  const onChangeSerie = () => {
    const types = {
      liveAction, animation, serie: !serie, watched
    };

    setSerie(!serie);

    onType(types);
  }

  const onChangeLiveAction = () => {
    const types = {
      liveAction: !liveAction, animation, serie, watched
    };

    setLiveAction(!liveAction);

    onType(types);
  }

  const onChangeWatched = () => {
    const types = {
      liveAction, animation, serie, watched: !watched
    };

    setWatched(!watched);

    onType(types);
  }

  return (
    <div className="flex justify-center my-4">
      <div className="w-full lg:w-1/2 flex flex-col">

        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <MagnifyingGlassIcon className="w-7 h-7 text-gray-500 dark:text-gray-400"/>
          </div>
          <input
            type="text"
            value={search}
            onChange={onChangeSearch}
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full ps-14 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-xl h-14"
            placeholder="Buscar por filme..."/>
        </div>

        <div className="py-5 px-1 flex justify-start gap-4 flex-wrap">

          <ToggleButton checked={animation} onChange={onChangeAnimation} label="Filmes grandes"/>

          <ToggleButton checked={serie} onChange={onChangeSerie} label="Filmes pequenos"/>

          <ToggleButton checked={liveAction} onChange={onChangeLiveAction} label="Live Action"/>

          <ToggleButton checked={watched} onChange={onChangeWatched} label="Filmes assistidos"/>

        </div>

      </div>

    </div>
  )
}

