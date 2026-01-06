export interface Movie {
  id: string,
  image: string,
  name: string,
  description: string,
  type: 'animated-movie' | 'serie' | 'live-action',
  streams: Stream[],
  tags: string[],
  watchedDate: string | null,
  year: number | null
}

export interface Stream {
  name: string,
  link: string
};
