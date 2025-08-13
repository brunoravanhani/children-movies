import React from "react";

import netflix from '../assets/netflix.svg';
import amazon from '../assets/amazon-prime-video.svg';
import hbo from '../assets/hbo-max.svg';
import disney from '../assets/disney.svg';
import youtube from '../assets/youtube.svg';
import movie from '../assets/movie.gif';

export const StreamImage = ({ streamName } : { streamName : string }) => {

  let image = movie;

  if (streamName === 'Netflix')
    image = netflix;

  if (streamName === 'Disney')
    image = disney;

  if (streamName === 'Amazon Prime' || streamName === 'Prime Video')
    image = amazon;

  if (streamName === 'Max')
    image = hbo;

  if (streamName === 'Youtube')
    image = youtube;

  return <img src={image} alt={streamName} className="inline" />;
}
