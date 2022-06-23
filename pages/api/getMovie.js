import axios from 'axios'

export default async function handler(req, res) {
  await axios
    .get(
      `https://api.themoviedb.org/3/movie/${req.body.id}?api_key=${process.env.TMDBAPI}&language=en-US`
    )
    .then((result) => res.status(200).send(result.data))
    .catch(() => res.status(400).end())
}
