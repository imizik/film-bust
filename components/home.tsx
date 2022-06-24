import Link from 'next/link'
import { Button, Paper, Text, Title, Group } from '@mantine/core'
import { Stack } from '@mantine/core'
import logoGif from '../gif/FILMBUST.gif'
import Image from 'next/image'

interface Props {
  user: boolean
  signOut?: () => void
}
export default function Homepage(props: Props) {
  const { user, signOut } = props
  return (
    <div>
      <Stack align="center" justify="flex-start" spacing="sm">
        <Paper shadow="md" radius="xl" p="xl" withBorder>
          <Image
            src={logoGif}
            alt="loading"
            width={250}
            height={150}
            style={{ marginTop: '5%' }}
          />
        </Paper>
        <br />
        <Title order={3} className='homeText'>Not sure what to watch tonight?</Title>
        <Text size="sm" className='homeText'>Get 8 tries to guess a top-rated movie!</Text>
        <br/>
        <br/>
        {!user && (
          <Group className='homeButtons'>
            <Link href="/game" passHref>
              <Button size="xs" color="gray" radius="xs" style={{ width: '50%' }}>
                Play as guest
              </Button>
            </Link>
            <Link href="/auth" passHref>
              <Button size="xs" color="dark" radius="xs"
              style={{ width: '50%' }}>Sign in</Button>
            </Link>
          </Group>
        )}
        {user && (
          <Group className='homeButtons'>
            <Link href="/game" passHref>
              <Button
                radius="xs"
                size="xs"
                color="gray"
                style={{ width: '50%' }}
              >
                Play Now
              </Button>
            </Link>
            <Button
              radius="xs"
              style={{ width: '50%' }}
              size="xs"
              onClick={signOut}
              color="dark"
            >
              Sign Out
            </Button>
          </Group>
        )}
      </Stack>
    </div>
  )
}
