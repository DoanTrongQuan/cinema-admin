import Cinema from '.'
const prefix = ''

export const login = data => {
  const url = prefix + 'auth/login'
  return Cinema.axiosClient.post(url, data)
}



  export const confirmAuthor = data => {
    const url = prefix + 'user/confirm-author'
    return Cinema.axiosAuth.post(url,data)
    }

export const getAccessTokenByRefreshToken = refreshToken => {
  const url = prefix + 'auth/refresh-token?refreshToken='
  return Cinema.axiosClient.get(url + refreshToken)
}