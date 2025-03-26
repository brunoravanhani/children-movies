export interface Movie {
  id: number;
  name: string;
  description: string;
  image: string;
  streams: Stream[]
}

interface Stream {
  name: string,
  link: string
}
