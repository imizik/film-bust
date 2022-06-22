import axios from 'axios'

export default async function handler(req, res) {
  let allResults = []
  let sequentialNums = Array(500).fill().map((element, index) => index + 1)
  let mappedPromises = sequentialNums.map((num) => {
    return axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDBAPI}&language=en-US&page=${num}`) .then((res) => allResults.push(...res.data.results))
  })
  await Promise.all(mappedPromises)
  .then(result => {
    const finalData = allResults.filter((movie) => movie.original_language = 'en' && movie.vote_count > 8000)
    res.status(200).send(finalData)
  })
    .catch((err) => res.status(404).end())
}
