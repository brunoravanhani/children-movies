import React, { useEffect, useState } from "react";
import { type Movie } from '../types/Movie';

import { FilmIcon, ListBulletIcon, UserGroupIcon } from '@heroicons/react/24/solid'

export const MovieCard = ({ movie }: { movie: Movie}) => {
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
        <div className="mt-auto">
          {movie.streams.length == 0 && <span className="text-gray-500 text-sm">Sem streaming disponível</span>}
          {movie.streams.map(stream =>
            (<a href={stream.link} className={colorStream(stream.name)} target="_blank">{stream.name}</a>))}
        </div>

      </div>
    </div>
  );
}

function colorStream(streamName: string) {
  if (streamName === 'Netflix')
    return 'color-netflix';

  if (streamName === 'Disney')
    return 'color-disney';

  if (streamName === 'Amazon Prime' || streamName === 'Prime Video')
    return 'color-amazon';

  if (streamName === 'Max')
    return 'color-max';

  if (streamName === 'Youtube')
    return 'color-youtube';

  return 'color-default';
}
