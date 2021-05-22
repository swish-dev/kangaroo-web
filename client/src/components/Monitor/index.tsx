import { useEffect, useState } from 'react'
import { MarkerImageType } from '../Shared/interfaces/Marker.interface'
import { IDriverInfo } from '../Shared/interfaces/Driver.interface'
import { IMarker } from '../Shared/interfaces/Marker.interface'
import { getDrivers } from '../Shared/services/driver'
import { usePollingFetch } from '../Shared/hooks'

import Map from '../Shared/Map'
import DriverDetail from './DriverDetail'
import DriverList from './DriverList'
import UserList from './UserList'
import styles from './style.scss'

import classNames from 'classnames'
const cx = classNames.bind(styles)

const SIDEBAR_MENU = {
  DRIVER: 'DRIVER',
  USER: 'USER',
}

function Monitor() {
  const [markers, setMarkers] = useState<IMarker[]>([])
  const [selectedDriver, setSelectedDriver] = useState<IDriverInfo | null>(null)
  const { data: drivers } = usePollingFetch(getDrivers, 1000) || []

  useEffect(() => {
    const driverMarkers =
      drivers?.map((driver) => {
        const { lat, lng, journeys } = driver
        return {
          lat,
          lng,
          imageType:
            journeys.length === 0 ||
            journeys[journeys.length - 1]?.status !== 'DRIVING'
              ? MarkerImageType.CAR_FREE
              : MarkerImageType.CAR_OCCUPIED,
          onClick: () => setSelectedDriver(driver),
        }
      }) || []
    setMarkers(driverMarkers)
  }, [drivers])

  const [sidebarMenu, setSidebarMenu] = useState(SIDEBAR_MENU.USER)

  return (
    <div className="monitor">
      <div className="sidebar">
        {selectedDriver ? (
          <DriverDetail {...{ setSelectedDriver, driver: selectedDriver }} />
        ) : (
          <>
            <div className="select">
              <p
                className={cx('selected-base', {
                  selected: sidebarMenu === SIDEBAR_MENU.USER,
                })}
                onClick={() => setSidebarMenu(SIDEBAR_MENU.USER)}
              >
                User
              </p>
              <p
                className={cx('selected-base', {
                  selected: sidebarMenu === SIDEBAR_MENU.DRIVER,
                })}
                onClick={() => setSidebarMenu(SIDEBAR_MENU.DRIVER)}
              >
                Driver
              </p>
            </div>
            {sidebarMenu === SIDEBAR_MENU.USER ? (
              <UserList />
            ) : (
              <DriverList {...{ setSelectedDriver }} />
            )}
          </>
        )}
      </div>
      <Map {...{ markers }} />
    </div>
  )
}

export default Monitor
