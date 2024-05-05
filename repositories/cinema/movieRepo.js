import Cinema from '.'
const prefix = ''

export const getAllMovie = () => {
  const url = prefix + 'movie/get-movie-by-admin'
  return Cinema.axiosAuth.get(url)
}

export const createMovie = (data) => {
  const url = prefix + 'movie/create-movie'
  return Cinema.axiosAuth.post(url,data)
}
