import base from './api'

export const getDrivers = async () => {
  const res = await base().get('/drivers')
  return res.data
}

export const getDriverById = async (driverId: string) => {
  const res = await base().get(`/drivers/${driverId}`)
  return res.data
}
