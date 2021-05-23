import { useState } from 'react'
import classNames from 'classnames'
import dayjs from 'dayjs'

import { MarkerImageType } from '../Shared/interfaces/Marker.interface'
import { IDriverInfo } from '../Shared/interfaces/Driver.interface'
import { IMarker } from '../Shared/interfaces/Marker.interface'
import { getDrivers } from '../Shared/services/driver'
import { usePollingFetch } from '../Shared/hooks'

import Map from '../Shared/Map'
import DriverDetail from './DriverDetail'
import styles from './style.scss'

import { getUsers } from '../Shared/services/user'
import { IUserInfo } from '../Shared/interfaces/User.interface'
const cx = classNames.bind(styles)

export enum MonitorSidebarMenuType {
  Driver,
  User,
}

const THRESHOLD = 3
const { Driver, User } = MonitorSidebarMenuType
const { CAR_FREE, CAR_OCCUPIED } = MarkerImageType

const isDriver = (input: unknown): input is IDriverInfo => {
  return input != null && (input as IDriverInfo).fmsReport !== undefined
}

export default function MonitorPage() {
  const [menuType, setMenuType] = useState(User)

  const { data: users } = usePollingFetch(getUsers, 1000)

  const { data: drivers } = usePollingFetch(getDrivers, 700)
  const [selectedDriverId, setSelectedDriverId] = useState<string | null>(null)

  const selectedDriver = drivers?.find(({ id }) => id === selectedDriverId)

  const handleDriverSelect = (id: string | null) => () => {
    setSelectedDriverId(id)
  }

  const clearSelectedDriver = handleDriverSelect(null)

  const markers: IMarker[] =
    drivers?.map(({ id, lat, lng, journeys }) => ({
      lat: lat,
      lng: lng,
      imageType:
        journeys?.slice().reverse()[0]?.status === 'DRIVING' ? CAR_OCCUPIED : CAR_FREE,
      onClick: handleDriverSelect(id),
    })) || []

  const handleSidebarChange = (input: MonitorSidebarMenuType) => () => {
    setMenuType(input)
  }

  const isDateDiffBigger = (date: Date, threshold: number) => {
    if (!date) return true
    
    const diff = Math.abs(dayjs(date).diff(dayjs(), 'minutes'))
    if (diff > threshold) return true
    return false
  }

  return (
    <div className="monitor">
      <div className="sidebar">
        {selectedDriver && (
          <DriverDetail onBack={clearSelectedDriver} {...selectedDriver} />
        )}
        {!selectedDriver && (
          <>
            <div className="select">
              <p
                className={cx('selected-base', {
                  selected: menuType === User,
                })}
                onClick={handleSidebarChange(User)}
              >
                User
              </p>
              <p
                className={cx('selected-base', {
                  selected: menuType === Driver,
                })}
                onClick={handleSidebarChange(Driver)}
              >
                Driver
              </p>
            </div>
            <ul className="menu-list">
              {(menuType === User ? users : drivers)?.map(
                (record: IUserInfo | IDriverInfo) => {
                  const { id, journeys } = record

                  return (
                    <li
                      className="menu-row"
                      key={id}
                      onClick={handleDriverSelect(id)}
                    >
                      <p>
                        <b>
                          {isDriver(record) ? record.name : record.nickname}
                        </b>
                      </p>
                      <p>
                        {journeys?.slice().reverse()[0]?.status === 'COMPLETED' && isDateDiffBigger(journeys?.slice().reverse()[0]?.arriveAt, THRESHOLD) ?
                        '':journeys?.slice().reverse()[0]?.status?.toLowerCase()}
                      </p>
                    </li>
                  )
                }
              )}
            </ul>
          </>
        )}
      </div>
      <Map {...{ markers }} />
    </div>
  )
}
