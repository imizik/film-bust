import {
  Center,
  SimpleGrid,
  Stack,
  Group,
  Container,
  Image,
} from '@mantine/core'
import React from 'react'
import numberWithCommas from '../utils/commas'
import checker from '../utils/arrowCheck'

export default function guessList(list, currMovie) {
  const mappedGuesses = list.map((guess, index) => (
    <Group
      key={index}
      position="left"
      style={{ width: '100vw', borderBottom: '1px solid black' }}
    >
      <SimpleGrid cols={8} style={{ width: '100%' }}>
        <Container size="xl" style={{ width: '100%' }}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${guess.poster_path}`}
            width={50}
            fit="contain"
            alt="img not found"
          />
        </Container>
        <Stack spacing="xs" style={{ width: '100%' }}>
          <div>Title</div>
          <div>{guess.original_title}</div>
        </Stack>
        <Stack spacing="xs" style={{ width: '100%' }}>
          <div>Budget</div>
          <div
            style={{
              color: checker.budgetColor(guess.budget, currMovie.budget),
            }}
          >
            {'$ ' + numberWithCommas(guess.budget)}
            <span style={{ marginLeft: '5%', color: 'white' }}>
              {' '}
              {checker.checkMoney(guess.budget, currMovie.budget)}
            </span>
          </div>
        </Stack>
        <Stack spacing="xs" style={{ width: '100%' }}>
          <div>Gross</div>
          <div
            style={{
              color: checker.grossColor(guess.revenue, currMovie.revenue),
            }}
          >
            {'$ ' + numberWithCommas(guess.revenue)}
            <span style={{ marginLeft: '5%', color: 'white' }}>
              {' '}
              {checker.checkMoney(guess.revenue, currMovie.revenue)}
            </span>
          </div>
        </Stack>
        <Stack spacing="xs" style={{ width: '100%' }}>
          <div>Genres</div>
          <div style={{width: '100%'}}>
            {guess.genres.map((genre, i) => {
              return (
                <div
                  key={i}
                  style={{
                    color: checker.genreColor(genre.name, currMovie.genres),
                    fontSize: '0.9rem',
                  }}
                >
                  {genre.name}
                </div>
              )
            })}
            <span style={{ marginLeft: '5%' }}>
              {' '}
              {checker.checkMoney(guess.genres.length, currMovie.genres.length)}
            </span>
          </div>
        </Stack>
        <Stack spacing="xs" style={{ width: '100%' }}>
          <div>Release Date</div>
          <div
            style={{
              color: checker.releaseColor(
                guess.release_date,
                currMovie.release_date
              ),
            }}
          >
            {guess.release_date}{' '}
            <span style={{ marginLeft: '5%', color: 'white' }}>
              {' '}
              {checker.checkDate(guess.release_date, currMovie.release_date)}
            </span>
          </div>
        </Stack>
        <Stack spacing="xs" style={{ width: '100%' }}>
          <div>Runtime</div>
          <div
            style={{
              width: '35%',
              color: checker.runtimeColor(guess.runtime, currMovie.runtime),
            }}
          >
            {guess.runtime}min{' '}
            <span style={{ marginLeft: '5%' }}>
              {' '}
              {checker.checkMoney(guess.runtime, currMovie.runtime)}
            </span>
          </div>
        </Stack>
        <Stack spacing="xs" style={{ width: '100%' }}>
          <div>Score</div>
          <div
            style={{
              width: '25%',
              color: checker.scoreColor(
                guess.vote_average,
                currMovie.vote_average
              ),
            }}
          >
            {guess.vote_average}{' '}
            <span style={{ marginLeft: '5%', color: 'white' }}>
              {' '}
              {checker.checkMoney(guess.vote_average, currMovie.vote_average)}
            </span>
          </div>
        </Stack>
      </SimpleGrid>
    </Group>
  ))
  return mappedGuesses
}
