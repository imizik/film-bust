import { SimpleGrid, Stack, Group, Container, Image } from '@mantine/core'
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
        <Stack justify="flex-start" style={{ marginLeft: '10%' }}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${guess.poster_path}`}
            width={70}
            fit="contain"
            alt="img not found"
          />
        </Stack>
        <Stack spacing="xs" style={{ width: '100%' }}>
          <div style={{ borderBottom: '1px solid white' }}>Title</div>
          <div style={{ fontSize: '0.8rem' }}>{guess.original_title}</div>
        </Stack>
        <Stack spacing="xs" style={{ width: '100%' }}>
          <div style={{ borderBottom: '1px solid white' }}>Budget</div>
          <Group>
            <div
              style={{
                color: checker.budgetColor(guess.budget, currMovie.budget),
                fontSize: '0.8rem',
                width: '75%',
              }}
            >
              {'$ ' + numberWithCommas(guess.budget)}
            </div>
            <div style={{ marginLeft: '5%', color: 'white' }}>
              {' '}
              {checker.checkMoney(guess.budget, currMovie.budget)}
            </div>
          </Group>
        </Stack>
        <Stack spacing="xs" style={{ width: '100%' }}>
          <div style={{ borderBottom: '1px solid white' }}>Gross</div>
          <Group>
            <div
              style={{
                color: checker.grossColor(guess.revenue, currMovie.revenue),
                fontSize: '0.8rem',
                width: '75%',
              }}
            >
              {'$ ' + numberWithCommas(guess.revenue)}
            </div>
            <div style={{ marginLeft: '5%', color: 'white' }}>
              {' '}
              {checker.checkMoney(guess.revenue, currMovie.revenue)}
            </div>
          </Group>
        </Stack>
        <Stack spacing="xs" style={{ width: '100%' }}>
          <div style={{ borderBottom: '1px solid white' }}>Genres</div>
          <Group align='flex-start'>
            <div style={{ width: '75%', fontSize: '0.8rem' }}>
              {guess.genres.map((genre, i) => {
                return (
                  <div
                    key={i}
                    style={{
                      color: checker.genreColor(genre.name, currMovie.genres),
                      fontSize: '0.8rem',
                    }}
                  >
                    {genre.name}
                  </div>
                )
              })}
            </div>
            <span style={{ marginLeft: '5%' }}>
              {' '}
              {checker.checkMoney(guess.genres.length, currMovie.genres.length)}
            </span>
          </Group>
        </Stack>
        <Stack spacing="xs" style={{ width: '100%' }}>
          <div style={{ borderBottom: '1px solid white' }}>Release Date</div>
          <Group>
            <div
              style={{
                color: checker.releaseColor(
                  guess.release_date,
                  currMovie.release_date
                ),
                fontSize: '0.8rem',
                width: '75%',
              }}
            >
              {guess.release_date}{' '}
            </div>
            <span style={{ marginLeft: '5%', color: 'white' }}>
              {' '}
              {checker.checkDate(guess.release_date, currMovie.release_date)}
            </span>
          </Group>
        </Stack>
        <Stack spacing="xs" style={{ width: '100%' }}>
          <div style={{ borderBottom: '1px solid white' }}>Runtime</div>
          <Group>
            <div
              style={{
                width: '35%',
                color: checker.runtimeColor(guess.runtime, currMovie.runtime),
                fontSize: '0.8rem', width: '75%'
              }}
            >
              {guess.runtime}min{' '}
            </div>
            <span style={{ marginLeft: '5%', color: 'white' }}>
              {' '}
              {checker.checkMoney(guess.runtime, currMovie.runtime)}
            </span>
          </Group>
        </Stack>
        <Stack spacing="xs" style={{ width: '100%' }}>
          <div style={{ borderBottom: '1px solid white', width: '95%' }}>
            Score
          </div>
          <Group>
            <div
              style={{
                color: checker.scoreColor(
                  guess.vote_average,
                  currMovie.vote_average
                ),
                fontSize: '0.8rem', width: '75%'
              }}
            >
              {guess.vote_average}{' '}
            </div>
            <span style={{ color: 'white' }}>
              {' '}
              {checker.checkMoney(guess.vote_average, currMovie.vote_average)}
            </span>
          </Group>
        </Stack>
      </SimpleGrid>
    </Group>
  ))
  return mappedGuesses
}
