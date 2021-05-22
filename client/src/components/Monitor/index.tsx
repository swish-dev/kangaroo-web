import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { MarkerImageType } from '../Shared/interfaces/Marker.interface'

import Map from '../Shared/Map'
import DriverList from './DriverList'
import UserList from './UserList'
import styles from './style.scss'

const cx = classNames.bind(styles)

const SIDEBAR_MENU = {
  DRIVER: 'DRIVER',
  USER: 'USER',
}

function Monitor() {
  const [markers, setMarkers] = useState([
    {
      imageType: MarkerImageType.CAR_FREE,
      lat: 37.56572474944695,
      lng: 126.97737353796997,
    },
    {
      imageType: MarkerImageType.CAR_OCCUPIED,
      lat: 37.567106516757505,
      lng: 126.97727818430188,
    },
  ])
  useEffect(() => {
    const timer = setInterval(() => {
      setMarkers((prev) =>
        prev.map(({ lat, ...rest }) => ({ lat: lat + 0.0001, ...rest }))
      )
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const [sidebarMenu, setSidebarMenu] = useState(SIDEBAR_MENU.USER)

  return (
    <div className="monitor">
      <div className="sidebar">
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
        {sidebarMenu === SIDEBAR_MENU.USER ? <UserList /> : <DriverList />}
      </div>
      <Map {...{ markers }} />
    </div>
  )
}

export default Monitor
