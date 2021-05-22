import { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { IKid } from '../../Shared/interfaces/Kid.interface'
import { IDriverInfo } from '../../Shared/interfaces/Driver.interface'
import { getDriverById } from '../../Shared/services/driver'
import { MarkerImageType } from '../../Shared/interfaces/Marker.interface'

import UserService, { getUserById } from '../../Shared/services/user'
import MainLayout from '../layouts/main'
import KidsPart from '../main/kids'
import LinearProgress from '@material-ui/core/LinearProgress'
import Map from '../../Shared/Map'

import './style.scss'
import dayjs from 'dayjs'

const STAY_TIME = 8000

export default function OnBoard() {
  const userId = UserService.getMyId()
  const [kids, setKids] = useState<IKid[]>([])
  const [selectedKid, setSelectedKid] = useState(0)
  const [driver, setDriver] = useState<IDriverInfo | null>(null)
  const [redirectPath, setRedirectPath] = useState('')
  const [startTime, setStartTime] = useState<any>(null)
  const [_, setTick] = useState<any>('')
  useEffect(() => {
    handleGetKids()
    const asyncFunc = async () => {
      const { journeys } = await getUserById(userId)
      const driverInfo = await getDriverById(
        journeys[journeys.length - 1]?.driverId
      )
      setDriver(driverInfo)
    }
    asyncFunc()

    setStartTime(new Date())
    const timeoutId = setTimeout(() => {
      setRedirectPath('/parent')
    }, STAY_TIME)

    const intervalId = setInterval(() => {
      setTick(new Date())
    }, 1000)

    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId)
    }
  }, [])

  const handleGetKids = async () => {
    const data = await UserService.getKids(userId)

    setKids(data)
  }

  const [showMap, setShowMap] = useState(false)
  if (redirectPath) return <Redirect to={redirectPath} />
  return (
    <MainLayout>
      {showMap && driver ? (
        <Map
          {...{
            markers: [
              {
                lat: driver.lat,
                lng: driver.lng,
                imageType: MarkerImageType.CAR_OCCUPIED,
              },
            ],
            isFollow: true,
          }}
        />
      ) : (
        <>
          <KidsPart {...{ kids, setKids, selectedKid, setSelectedKid }} />
          <div className="info-text">
            <p>
              <strong>{kids[selectedKid]?.name}</strong>
              {` is moving!`}
            </p>
            <p>Map</p>
          </div>
          <div className="progress">
            <LinearProgress
              variant="determinate"
              value={(dayjs(new Date()).diff(startTime) / STAY_TIME) * 100}
            />
            <div className="progress-text">
              <p>FROM</p>
              <p>TO</p>
            </div>
          </div>
          <div className="speed">
            <p>{driver?.fmsReport.speed}</p>
          </div>
          <div className="driver">
            <p>Driver's Info</p>
            <div className="driver-info">
              <div className="driver-profile">
                <img src={driver?.avatarUrl} />
                <p>{driver?.name}</p>
              </div>
              <div className="driver-text">
                <p>{`${driver?.name} is taking care of your kid!`}</p>
                <p>{`${driver?.car.id}`}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </MainLayout>
  )
}
