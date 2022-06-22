import { Center, SimpleGrid, Stack, Group, Container, Image } from '@mantine/core'
import React, { Dispatch, SetStateAction, useState } from 'react'
import Input from './autocomplete'
import { Props, Selected } from '../utils/types'
import axios from 'axios'
import guessList from './guesses'

export default function GameComp({
  movies,
  currMovie,
  setCurrMovie,
  setGameReset,
}: Props) {
  const [list, setList] = useState([])
  const [guessCount, setGuessCount] = useState(0)

  const handleSubmit = (selected: Selected) => {
    axios.post(`/api/getMovie/`, { id: selected.id }).then((res) => {
      const copyList = [...list]
      copyList.push(res.data)
      const newCount = guessCount + 1
      setList(copyList)
      setGuessCount(newCount)
    })
  }
  console.log(currMovie)
  console.log(list)

  const mappedGuesses = guessList(list, currMovie)

  return (
    <div>
      <Stack align="center" justify="flex-start" spacing="sm" style={{ width: '100%' }}>
        {movies && <Input movies={movies} handleSubmit={handleSubmit} />}
        <div>{guessCount} / 8</div>
        {mappedGuesses}
      </Stack>
    </div>
  )
}
