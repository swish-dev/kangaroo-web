import { useEffect, useState } from 'react'
import { IDriverInfo } from '../../Shared/interfaces/Driver.interface'
import { getDriverById, getDrivers } from '../../Shared/services/driver'

export const useDriver = (id: string) => {
  const [driver, setDriver] = useState<IDriverInfo | null>(null)

  const fetch = async () => {
    const data = await getDriverById(id)
    setDriver(data)
  }

  useEffect(() => {
    if (!id) {
      return
    }
    fetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return driver
}

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
