import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowDown,
  faArrowUp,
  faCheck,
} from '@fortawesome/free-solid-svg-icons'

const checker = {
  checkMoney: (guess, check) => {
    if (guess > check) {
      return <FontAwesomeIcon icon={faArrowDown} />
    } else if (guess < check) {
      return <FontAwesomeIcon icon={faArrowUp} />
    } else {
      return <FontAwesomeIcon icon={faCheck} />
    }
  },

  checkDate: (guess, check) => {
    guess = new Date(guess)
    check = new Date(check)
    if (guess > check) {
      return <FontAwesomeIcon icon={faArrowDown} />
    } else if (guess < check) {
      return <FontAwesomeIcon icon={faArrowUp} />
    } else {
      return <FontAwesomeIcon icon={faCheck} />
    }
  },

  budgetColor: (guess, check) => {
    if (Math.abs(guess - check) < 25000000) {
      return 'green'
    } else if (Math.abs(guess - check) < 100000000) {
      return 'yellow'
    }
  },

  grossColor: (guess, check) => {
    if (Math.abs(guess - check) < 100000000) {
      return 'green'
    } else if (Math.abs(guess - check) < 250000000) {
      return 'yellow'
    }
  },

  scoreColor: (guess, check) => {
    if (Math.abs(guess - check) < 0.5) {
      return 'green'
    } else if (Math.abs(guess - check) < 1) {
      return 'yellow'
    }
  },

  genreColor: (guess, check) => {
    for (let genre of check) {
      if (genre.name === guess) return 'green'
    }
    return 'null'
  },

  releaseColor: (guess, check) => {
    if (guess.slice(0, 4) === check.slice(0, 4)) {
      return 'green'
    } else if (Math.abs(guess.slice(0, 4) - check.slice(0, 4)) < 3) {
      return 'yellow'
    }
  },

  runtimeColor: (guess, check) => {
    if (Math.abs(guess - check) < 10) {
      return 'green'
    } else if (Math.abs(guess - check) < 20) {
      return 'yellow'
    }
  },
}

export default checker
