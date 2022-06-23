import axios from 'axios'

export default async function handler(req, res) {
  await axios
    .get(
      `https://api.themoviedb.org/3/movie/${req.query.links}/videos?api_key=${process.env.TMDBAPI}&language=en-US`
    )
    .then((result) => {
      let sendLink = '';
      for (let link of result.data.results) {
        if (link.site === 'YouTube' && link.type === 'Trailer') {
          sendLink = link.key
        }
      }
      res.status(200).send(sendLink)
    })
    .catch(() => res.status(400).end())

}
