import { useEffect, useState } from 'react'
import { Stack } from '@mantine/core'
import axios from 'axios'
import movieData from '../utils/movieData.js'
import GameComp from '../components/gameComp'

function GuesserGame() {
  const [movies, setMovies] = useState(movieData)
  const [currMovie, setCurrMovie] = useState(movieData[0])
  const [gameReset, setGameReset] = useState(0)

  useEffect(() => {
    axios
    .get('/api/getGames/')
    .then((res) => {
      console.log(res)
      setMovies(res.data)
      setCurrMovie(movies[Math.floor(Math.random() * (movies.length + 1))]);
    })
    .catch((err) => console.log(err))

  }, [])

  useEffect(() => {
    setCurrMovie(movies[Math.floor(Math.random() * (movies.length + 1))]);
  }, [gameReset])

  return (
    <Stack align="center" justify="flex-start" spacing="sm">
      <h1>Film Bust</h1>
      <GameComp
        movies={movies}
        currMovie={currMovie}
        setCurrMovie={setCurrMovie}
        setGameReset={setGameReset}
      />
    </Stack>
  )
}

export default GuesserGame
