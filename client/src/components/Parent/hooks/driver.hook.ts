import { useEffect, useState } from 'react'
import { IDriverInfo } from '../../Shared/interfaces/Driver.interface'
import { getDrivers } from '../../Shared/services/driver'

/** Get All Drivers */
export const useDrivers = () => {
  const [drivers, setDrivers] = useState<IDriverInfo[]>([])

  const fetch = async () => {
    const data = await getDrivers()
    setDrivers(data)
  }

  useEffect(() => {
    fetch()
  }, [])

  return drivers
}
