import { useEffect, useState } from 'react'
import { Stack } from '@mantine/core'
import axios from 'axios'
import movieData from '../utils/movieData.js'
import GameComp from '../components/gameComp'
import {Props, currMovie} from '../utils/types'

function GuesserGame() {
  const [movies, setMovies] = useState<Array<currMovie>>(movieData)
  const [currMovie, setCurrMovie] = useState<currMovie>(movieData[0])
  const [gameReset, setGameReset] = useState<number>(0)

  useEffect(() => {
    // Below is to update list, do not want to update list every time as slows down app
    // axios
    // .get('/api/getGames/')
    // .then((res) => {
    //   console.log(res)
    //   setMovies(res.data)
    // })
    const current = movies[Math.floor(Math.random() * (movies.length + 1))]
    axios.post('/api/getMovie', {id: current.id}) .then((res) => {
      setCurrMovie(res.data);
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
