export interface Movie {
  id: number,
  image: string,
  name: string,
  description: string,
  type: 'animated-movie' | 'serie' | 'live-action',
  streams: Stream[],
  tags: string[],
  watchedDate: Date | null
}

export interface Stream {
  name: string,
  link: string
};
