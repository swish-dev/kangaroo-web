import { getDrivers } from '../../Shared/services/driver'
import { useSetRequestInterval } from '../../Shared/hooks/useSetRequestInterval'
import { IDriverInfo } from '../../Shared/interfaces/Driver.interface'
import './style.scss'

function DriverList() {
  const drivers: IDriverInfo[] = useSetRequestInterval(getDrivers, 5000) || []

  const generateDriverList = () => {
    return drivers?.map(({ id, name, journeys }) => (
      <li className="driver-row" key={id}>
        <p>{name}</p>
        <p>{journeys[journeys.length - 1]?.status?.toLowerCase()}</p>
      </li>
    ))
  }

  return (
    <div className="driver-list">
      <ul> {generateDriverList()}</ul>
    </div>
  )
}

export default DriverList
