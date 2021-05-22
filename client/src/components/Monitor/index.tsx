import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { MarkerImageType } from '../Shared/interfaces/Marker.interface'

import Map from '../Shared/Map'
import DriverDetail from './DriverDetail'
import DriverList from './DriverList'
import UserList from './UserList'
import styles from './style.scss'

const cx = classNames.bind(styles)

const SIDEBAR_MENU = {
  DRIVER: 'DRIVER',
  USER: 'USER',
  CAR: 'CAR',
}

const driver = {
  id: '5fef3932-3256-4f88-adb6-dfe9a0bf03b8',
  name: 'Larry Kuhlman',
  age: 43,
  avatarUrl:
    'https://images.unsplash.com/profile-fb-1544622642-bd417470b1eb.jpg?w=400&q=40',
  averageSpeed: 30,
  car: {
    id: 'd4e983fe-4410-468a-87f1-16c2ef28705e',
    type: 'Midget',
    year: 2013,
  },
  journeys: [
    {
      id: 'string',
      status: 'PENDING',
      departTime: '2021-05-22T09:18:45.639Z',
      arriveTime: '2021-05-22T12:30:44.816Z',
      userId: 'string',
      driverId: 'string',
    },
  ],
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

  const [sidebarMenu, setSidebarMenu] = useState(SIDEBAR_MENU.CAR)

  return (
    <div className="monitor">
      <div className="sidebar">
        {sidebarMenu === SIDEBAR_MENU.CAR ? (
          <DriverDetail {...{ driver }} />
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
            {sidebarMenu === SIDEBAR_MENU.USER ? <UserList /> : <DriverList />}
          </>
        )}
      </div>
      <Map {...{ markers }} />
    </div>
  )
}

export default Monitor
