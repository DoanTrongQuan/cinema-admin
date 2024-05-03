import Cinema from '.'
const prefix = ''

export const login = data => {
  const url = prefix + 'auth/login'
  return Cinema.axiosClient.post(url, data)
}

export const signUp = data => {
  const url = prefix + 'auth/register'
  return Cinema.axiosClient.post(url, data)
  }

  
export const getAccessTokenByRefreshToken = refreshToken => {
  const url = prefix + 'auth/refresh-token?refreshToken='
  return Cinema.axiosClient.get(url + refreshToken)
}