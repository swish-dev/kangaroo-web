import { memo } from 'react'
import { getDrivers } from '../../Shared/services/driver'
import { useSetRequestInterval } from '../../Shared/hooks/useSetRequestInterval'
import { IDriverInfo } from '../../Shared/interfaces/Driver.interface'
import './style.scss'

interface Props {
  setSelectedDriver: (driver: IDriverInfo | null) => void
}

function DriverList({ setSelectedDriver }: Props) {
  const drivers: IDriverInfo[] = useSetRequestInterval(getDrivers, 5000) || []

  const generateDriverList = () => {
    return drivers?.map((driver) => {
      const { id, name, journeys } = driver
      return (
        <li
          className="driver-row"
          key={id}
          onClick={() => setSelectedDriver(driver)}
        >
          <p>
            <b>{name}</b>
          </p>
          <p>{journeys[journeys.length - 1]?.status?.toLowerCase()}</p>
        </li>
      )
    })
  }

  return (
    <div className="driver-list">
      <ul> {generateDriverList()}</ul>
    </div>
  )
}

export default DriverList
