import React, {useState} from "react";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

type FiltersPropsType = {
  onSearch: (search: string) => void
  onType: (type: FilterGenre) => void
}

export interface FilterGenre {
  liveAction: boolean,
  animation: boolean,
  serie: boolean
}


export const Filters = ({onSearch, onType} : FiltersPropsType) => {

  const [search, setSearch] = useState("");
  const [liveAction, setLiveAction] = useState(true);
  const [animation, setAnimation] = useState(true);
  const [serie, setSerie] = useState(true);

  const onChangeSearch = (e: any) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  }

  const onChangeAnimation = () => {
    const types = {
      liveAction, animation: !animation, serie
    };

    setAnimation(!animation);

    onType(types);
  }

  const onChangeSerie = () => {
    const types = {
      liveAction, animation, serie: !serie
    };

    setSerie(!serie);

    onType(types);
  }

  const onChangeLiveAction = () => {
    const types = {
      liveAction: !liveAction, animation, serie
    };

    setLiveAction(!liveAction);

    onType(types);
  }

  return (
    <div className="flex justify-center m-4">
      <div className="w-1/2 flex flex-col">

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

        <div className="py-5 px-1 flex justify-start gap-4">
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={animation} onChange={onChangeAnimation} className="sr-only peer"/>
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-xl font-medium text-gray-900 dark:text-gray-300">Filmes grandes</span>
          </label>

          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={serie} onChange={onChangeSerie} className="sr-only peer"/>
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-xl font-medium text-gray-900 dark:text-gray-300">Filmes pequenos</span>
          </label>

          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={liveAction} onChange={onChangeLiveAction} className="sr-only peer"/>
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-xl font-medium text-gray-900 dark:text-gray-300">Live Action</span>
          </label>
        </div>

      </div>

    </div>
  )
}

