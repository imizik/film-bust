import Link from 'next/link';
import { Button } from '@mantine/core';
import { Stack } from '@mantine/core';

interface Props {
  user: boolean
  signOut?: () => void
}
export default function Homepage(props: Props) {
  const { user, signOut } = props
  return (
    <div>
      <Stack align="center" justify="flex-start" spacing="sm">
        <h1>Film Bust</h1>
        {!user && (
          <>
          <Link href="/auth" passHref>
            <Button>Sign in</Button>
          </Link>
          <Link href="/game" passHref>
            <Button>Play as guest</Button>
          </Link>
          </>
        )}
        {user && (
          <>
            <Link href="/game" passHref>
              <Button>Guess the movie</Button>
            </Link>
            <Button onClick={signOut}>Sign Out</Button>
          </>
        )}
      </Stack>
    </div>
  )
}
