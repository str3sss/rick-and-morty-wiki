import { Info } from "./Info"

export interface Episode {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string,
  created: string
}

export interface EpisodeRequest {
  info: Info;
  results: Episode[];
}
