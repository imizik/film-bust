import Link from 'next/link';
import { Button, Paper } from '@mantine/core';
import { Stack } from '@mantine/core';
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
          <Image src={logoGif} alt='loading' width={250} height={150} style={{marginTop: '5%'}}/>
        </Paper>
        {!user && (
          <>
          <Link href="/game" passHref>
            <Button size='xs' color="teal">Play as guest</Button>
          </Link>
          <Link href="/auth" passHref>
            <Button size='xs'>Sign in</Button>
          </Link>
          </>
        )}
        {user && (
          <>
            <Link href="/game" passHref>
              <Button size='xs' color="teal">Guess the movie</Button>
            </Link>
            <Button  size='xs' onClick={signOut}>Sign Out</Button>
          </>
        )}
      </Stack>
    </div>
  )
}
