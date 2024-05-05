import Cinema from '.'
const prefix = ''

export const getAllSchedule = () => {
  const url = prefix + 'schedule/get-all-schedule-by-admin'
  return Cinema.axiosAuth.get(url)
}

