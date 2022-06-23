import {Dispatch, SetStateAction} from 'react'

export type currMovie = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: boolean
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface Props {
  currMovie?: currMovie
  setCurrMovie?: Dispatch<SetStateAction<currMovie>>
  setGameReset?: Dispatch<SetStateAction<number>>
  gameReset?: number
  movies?: Array<currMovie>
  handleSubmit?: (arg1: Selected) => void
}

export type Selected = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: boolean
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type userData ={
  name: string
  uv: number
  amt: number
}