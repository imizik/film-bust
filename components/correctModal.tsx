import axios from 'axios'
import { useEffect, useState } from 'react'
import transformUser from '../utils/transformUser'
import { Stack, Button, Text } from '@mantine/core'
import BarGraph from './barChart'
import { userData } from '../utils/types'
import Link from 'next/link';

export default function CorrectModal({ user, opened, currMovie, resetGame }) {
  const [userData, setUserData] = useState({})
  const [trailer, setTrailer] = useState('')

  useEffect(() => {
    if (user) {
      axios.get(`/api/stats/${user.uid}`).then((res) => setUserData(res.data))
      .then(() => {
        axios.get(`/api/links/${currMovie.id}`) .then((res) => setTrailer(res.data))
      })
    } else {
      axios.get(`/api/links/${currMovie.id}`) .then((res) => setTrailer(res.data))
    }
  }, [opened, user])

  const data: userData[] = transformUser(userData)

  return (
      <Stack align="center" style={{width: '100vw', height: '80vh'}}>
        <Button color="teal" onClick={resetGame} size='xs'>Play Again</Button>
        {user &&
          <>
            <span>Score History</span>
            <BarGraph data={data}/>
          </>
        }
        {!user &&
          <>
            <Text size='sm'>Want to keep track of your scores?</Text>
            <Link  href="/auth" passHref>
              <Button size='xs'>Sign in</Button>
            </Link>
          </>
        }
        <span style={{fontWeight: 'bold'}}>{currMovie.title}</span>
        <iframe
          src={`https://www.youtube.com/embed/${trailer}`}
          frameBorder="0"
          allowFullScreen
        />
      </Stack>
  )
}
