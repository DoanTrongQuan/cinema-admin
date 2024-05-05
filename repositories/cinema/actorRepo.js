import Cinema from '.'
const prefix = ''

export const createActor = (data) => {
  const url = prefix + 'actor/create-actor'
  return Cinema.axiosAuth.post(url,data)
}
