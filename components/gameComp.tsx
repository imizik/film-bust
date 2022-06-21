import Link from 'next/link'
import { Button } from '@mantine/core'
import { Stack } from '@mantine/core'
import React, { Dispatch, SetStateAction } from 'react'
import Input from './autocomplete'
type currMovie = {
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
  currMovie: currMovie
  setCurrMovie: Dispatch<SetStateAction<currMovie>>
  setGameReset: Dispatch<SetStateAction<number>>
  movies: Array<currMovie>
}
export default function GameComp({
  movies,
  currMovie,
  setCurrMovie,
  setGameReset,
}: Props) {
  return (
    <div>
      <Stack align="center" justify="flex-start" spacing="sm">
        {movies && <Input movies={movies} />}
      </Stack>
    </div>
  )
}
