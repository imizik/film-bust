/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal, Stack, Center, Paper } from '@mantine/core'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Input from './autocomplete'
import { Props, Selected } from '../utils/types'
import axios from 'axios'
import guessList from './guesses'
import CorrectModal from './correctModal'
import firebase from '../firebase/clientApp'
import { useAuthState } from 'react-firebase-hooks/auth'
import Clues from './clues'
import logoGif from '../gif/FILMBUST.gif'
import Image from 'next/image'

export default function GameComp({
  movies,
  currMovie,
  setGameReset,
  gameReset,
}: Props) {
  const auth = firebase.auth()
  const [list, setList] = useState([])
  const [guessCount, setGuessCount] = useState<number>(0)
  const [opened, setOpened] = useState<boolean>(false)
  const [titleString, setTitleString] = useState<string>('You Won!')
  const [titleColor, setTitleColor] = useState<string>('green')
  const [user] = useAuthState((auth as any))

  const handleSubmit = (selected: Selected) => {
    axios.post(`/api/getMovie/`, { id: selected.id }).then((res) => {
      const copyList = [...list]
      copyList.push(res.data)
      const newCount: number = guessCount + 1
      setList(copyList)
      setGuessCount(newCount)
      if (res.data.id === currMovie.id) {
        if (user) {
          handleStats()
        } else {
          setOpened(true)
        }
      }
    })
  }
  const handleStats = () => {
    axios
      .post('api/stats/stats', { id: user.uid, count: guessCount + 1 })
      .then(() => setOpened(true))
  }

  const resetGame = () => {
    setTitleColor('green')
    setTitleString('You Won!')
    setList([])
    setGuessCount(0)
    setOpened(false)
    const gameResetter = gameReset + 1
    setGameReset(gameResetter)
  }

  const mappedGuesses = guessList(list, currMovie)
  useEffect(() => {
    if (guessCount === 8) {
      axios
      .post('api/stats/stats', { id: user.uid, count: 'Bust' })
      .then(() =>{
        setTitleString('BUST!!!')
        setTitleColor('red')
        setOpened(true)
      })
    } else if (guessCount > 8) {
      setTitleString('BUST!!!')
      setTitleColor('red')
      setOpened(true)
    }
  }, [guessCount])

  return (
    <div>
      <Clues
        currMovie={currMovie}
        guessCount={guessCount}
        gameReset={gameReset}
      />
      <Stack
        align="center"
        justify="flex-start"
        spacing="sm"
        style={{ width: '100%' }}
      >
        <Link href="/" passHref>
          <Paper shadow="md" radius="xl" p="lg" withBorder style={{cursor: 'pointer'}}>
            <Image
              src={logoGif}
              alt="loading"
              width={150}
              height={100}
              style={{ marginTop: '5%' }}
            />
          </Paper>
        </Link>

        {movies && <Input movies={movies} handleSubmit={handleSubmit} />}
        {guessCount < 9 ? <div>{guessCount} / 8</div> : <div>8 / 8</div>}
        {mappedGuesses}
      </Stack>
      <Modal
        opened={opened}
        onClose={() => {
          setOpened(false)
        }}
        title={titleString}
        centered={true}
        styles={{
          modal: { backgroundColor: '#152642' },
          body: { backgroundColor: '#152642' },
          title: { margin: '0 auto', color: titleColor },
        }}
        overlayOpacity={0.55}
        overlayBlur={3}
      >
        <Center>
          <CorrectModal
            user={user}
            opened={opened}
            currMovie={currMovie}
            resetGame={resetGame}
          />
        </Center>
      </Modal>
    </div>
  )
}
