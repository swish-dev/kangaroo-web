import { DriverResponseDto, DriversResponseDto } from '../dtos/driver'
import base from './api'

export const getDrivers = async () => {
  const res = await base().get<DriversResponseDto>('/drivers')
  return res.data
}

export const getDriverById = async (driverId: string) => {
  const res = await base().get<DriverResponseDto>(`/drivers/${driverId}`)
  return res.data
}
