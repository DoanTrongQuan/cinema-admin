import Cinema from '.'
const prefix = ''

export const getAllMovie = () => {
  const url = prefix + 'movie/get-movie-by-admin'
  return Cinema.axiosAuth.get(url)
}
