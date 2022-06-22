import { Modal, Stack, } from '@mantine/core'
import React, { Dispatch, SetStateAction, useState } from 'react'
import Input from './autocomplete'
import { Props, Selected } from '../utils/types'
import axios from 'axios'
import guessList from './guesses'
import CorrectModal from './correctModal'
import firebase from "../firebase/clientApp";
import {useAuthState} from 'react-firebase-hooks/auth';

export default function GameComp({
  movies,
  currMovie,
  setCurrMovie,
  setGameReset,
}: Props) {

  const [list, setList] = useState([])
  const [guessCount, setGuessCount] = useState(0)
  const [opened, setOpened] = useState(false);
  const [user] = useAuthState(firebase.auth());

  const handleSubmit = (selected: Selected) => {
    axios.post(`/api/getMovie/`, { id: selected.id }).then((res) => {
      const copyList = [...list]
      copyList.push(res.data)
      const newCount = guessCount + 1
      setList(copyList)
      setGuessCount(newCount)
      if (res.data.id === currMovie.id) {
        handleStats()
        setOpened(true)
      }
    })
  }

  const handleStats = () => {
    axios.post('api/stats', {id: user.uid, count: guessCount + 1})
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
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="You Won!"
      >
        <CorrectModal user={user}/>
      </Modal>
    </div>
  )
}
