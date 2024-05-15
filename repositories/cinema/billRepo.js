import Cinema from '.'
const prefix = ''

export const getAllBill = () => {
  const url = prefix + 'bill/get-all-bill'
  return Cinema.axiosAuth.get(url)
}


