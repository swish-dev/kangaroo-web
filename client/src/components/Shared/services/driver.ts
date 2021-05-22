import base from './api'

const getDrivers = async () => {
  const res = await base().get('/drivers')
  return res.data
}

const getDriverById = async (driverId: string) => {
  const res = await base().get(`/drivers/${driverId}`)
  return res.data
}
const DriverService = {
  getDrivers,
  getDriverById,
}

export default DriverService
