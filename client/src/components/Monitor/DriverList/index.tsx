import { getDrivers } from '../../Shared/services/driver'
import { usePollingFetch } from '../../Shared/hooks'
import { IDriverInfo } from '../../Shared/interfaces/Driver.interface'
import './style.scss'

export type DriverListProps = {
  setSelectedDriver: (driver: IDriverInfo | null) => void
}

function DriverList({ setSelectedDriver }: DriverListProps) {
  const { data: drivers } = usePollingFetch(getDrivers, 5000) || []

  return (
    <div className="driver-list">
      <ul>
        {drivers?.map((driver) => (
          <li
            className="driver-row"
            key={driver.id}
            onClick={() => setSelectedDriver(driver)}
          >
            <p>
              <b>{driver.name}</b>
            </p>
            <p>{driver.journeys?.reverse()[0]?.status?.toLowerCase()}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DriverList
