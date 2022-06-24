import { useEffect, useState } from 'react'
import { Stack, Button, Drawer } from '@mantine/core'
import axios from 'axios'
import movieData from '../utils/movieData.js'
import GameComp from '../components/gameComp'
import { currMovie } from '../utils/types'
import AccordionRules from '../components/accordian'

function GuesserGame() {
  const [movies] = useState<Array<currMovie>>(movieData)
  const [currMovie, setCurrMovie] = useState<currMovie>(movieData[0])
  const [gameReset, setGameReset] = useState<number>(0)
  const [opened, setOpened] = useState<boolean>(false)

  useEffect(() => {
    // Below is to update list, do not want to update list every time as slows down app
    // axios
    // .get('/api/getGames/')
    // .then((res) => {
    //   console.log(res)
    //   setMovies(res.data)
    // })
    const current = movies[Math.floor(Math.random() * (movies.length + 1))]
    axios
      .post('/api/getMovie', { id: current.id })
      .then((res) => {
        setCurrMovie(res.data)
      })
      .catch((err) => console.log(err))
  }, [gameReset])

  return (
    <>
      <Button
        color="cyan"
        className="rules"
        size="xs"
        onClick={() => setOpened(true)}
      >
        Rules
      </Button>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Rules"
        padding="xl"
        size="xl"
      >
        <AccordionRules/>
      </Drawer>
      <Stack align="center" justify="flex-start" spacing="sm">
        <GameComp
          movies={movies}
          currMovie={currMovie}
          setCurrMovie={setCurrMovie}
          setGameReset={setGameReset}
          gameReset={gameReset}
        />
      </Stack>
    </>
  )
}

export default GuesserGame
