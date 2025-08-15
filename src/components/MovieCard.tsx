import React, { useEffect, useState } from "react";
import { type Movie } from '../types/Movie';
import { FilmIcon, ListBulletIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import { StreamImage } from './StreamImage';

export const MovieCard = ({ movie, watch }: { movie: Movie, watch : (id: number) => void}) => {

  return (
    <div key={movie.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col relative">

      <span className="absolute top-2 right-2 rounded-full bg-white p-1 opacity-75">
        { movie.type === 'animated-movie' && <FilmIcon className="size-8 inline" /> }
        { movie.type === 'serie' && <ListBulletIcon className="size-8 inline" /> }
        { movie.type === 'live-action' && <UserGroupIcon className="size-8 inline" /> }
      </span>

      <img src={movie.image} alt={movie.name} className="w-full h-64 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold mb-2">{movie.name}</h2>
        <div className="flex flex-wrap gap-2 mb-3">
          {movie.tags.map(tag =>
              (<span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{tag}</span>))}
        </div>
        <div className="mt-auto flex justify-between">
          {movie.streams.length == 0 && <span className="text-gray-500 text-sm">Sem streaming disponível</span>}
          <div className="">
            {movie.streams.map(stream =>
              (<StreamImage streamName={stream.name}/>))}
          </div>
          {movie.streams.length != 0 &&
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded justify-self-end"
              onClick={() => watch(movie.id) }>Assistir
            </button>}
        </div>
        <div className="flex justify-end  m-1">
          {!!movie.watchedDate && <span className="text-gray-500 text-xs">Assistido em: {formatDate(movie.watchedDate)}</span>}

        </div>

      </div>

    </div>
  );
}

function formatDate(dateString: string) : string {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
