import axios from 'axios'

export default async function handler(req, res) {
  await axios
    .get(
      `https://api.themoviedb.org/3/movie/${req.query.credits}/credits?api_key=${process.env.TMDBAPI}&language=en-US`
    )
    .then((result) => {
      let sendArray = [];
      for (let crew of result.data.crew) {
        if (crew.job === 'Director') {
          sendArray.push(crew)
          break;
        }
      }
      sendArray.push(result.data.cast[0], result.data.cast[1], result.data.cast[2])
      res.status(200).send(sendArray)
    })
    .catch(() => res.status(400).end())

}
