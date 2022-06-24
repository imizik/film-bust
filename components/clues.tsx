import { Drawer, ActionIcon, Stack, Overlay, Center, Text, Group } from '@mantine/core'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Puzzle, PuzzleOff, Lock } from 'tabler-icons-react'

export default function Clues({ currMovie, guessCount, gameReset }) {
  const [currGuess, setCurrGuess] = useState<number>(0)
  const [opened, setOpened] = useState<boolean>(false)
  const [credits, setCredits] = useState([])
  const [visible, setVisible] = useState<boolean>(true)
  const [visible2, setVisible2] = useState<boolean>(true)

  useEffect(() => {
    if (guessCount > 3) setVisible(false)
    if (guessCount > 5) setVisible2(false)
    setCurrGuess(guessCount)
  }, [guessCount])

  useEffect(() => {
    axios
      .get(`/api/credits/${currMovie.id}`)
      .then((res) => setCredits(res.data))
  }, [currMovie])

  useEffect(() => {
   setVisible(true)
   setVisible2(true)
  }, [gameReset])

  return (
    <>
      <ActionIcon
        color={currGuess < 4 ? 'gray' : 'teal'}
        className="clues"
        size="lg"
        variant="filled"
        onClick={() => setOpened(true)}
      >
        {currGuess < 4 ? <PuzzleOff size={16} /> : <Puzzle size={16} />}
      </ActionIcon>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="xl"
        size="xl"
        position="right"
      >
        <Stack>
          <Center
            style={{
              borderBottom: '1px solid gray',
              height: '15vh',
              borderTop: '1px solid gray',
              position: 'relative',
            }}
          >
            {visible && <Overlay opacity={0.6} color="#000" zIndex={5} />}
            <Stack spacing="xs" style={{ color: 'white' }}>
              {' '}
              {!visible ? (
                <Stack>
                  <Text weight={700} align="center">
                    Director
                  </Text>
                  <Text size="sm" align="center">
                    {credits[0]?.name}
                  </Text>
                </Stack>
              ) : (
                <>
                  <Lock style={{ margin: '0 auto' }} />
                  <br />
                  <Text>Director clue unlocked at guess 5</Text>
                </>
              )}
            </Stack>
          </Center>
          <Center
            style={{
              borderBottom: '1px solid gray',
              height: '25vh',
              borderTop: '1px solid gray',
              position: 'relative',
            }}
          >
            {visible2 && <Overlay opacity={0.6} color="#000" zIndex={5} />}
            <Stack spacing="xs" style={{ color: 'white', width: '80%' }}>
              {' '}
              {!visible2 ? (
                <Stack >
                  <Text weight={700} align="center">Top Billed</Text>
                  <Group position="apart">
                    <Stack spacing='xs'>
                      <Text underline weight={500} align="center" size='md'>
                        Name
                      </Text>
                      <Text size="xs" align="center">
                        {credits[1]?.name}
                      </Text>
                      <Text size="xs" align="center">
                        {credits[2]?.name}
                      </Text>
                      <Text size="xs" align="center">
                        {credits[3]?.name}
                      </Text>
                    </Stack>
                    <Stack spacing='xs'>
                      <Text underline weight={500} align="center" size='md'>
                        Department
                      </Text>
                      <Text size="xs" align="center">
                        {credits[1]?.known_for_department}
                      </Text>
                      <Text size="xs" align="center">
                        {credits[2]?.known_for_department}
                      </Text>
                      <Text size="xs" align="center">
                        {credits[3]?.known_for_department}
                      </Text>
                    </Stack>
                  </Group>
                </Stack>
              ) : (
                <>
                  <Lock style={{ margin: '0 auto' }} />
                  <br />
                  <Text align='center'>Cast clue unlocked at guess 7</Text>
                </>
              )}
            </Stack>
          </Center>
        </Stack>
      </Drawer>
    </>
  )
}
