import { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { IKid } from '../../Shared/interfaces/Kid.interface'
import { IDriverInfo } from '../../Shared/interfaces/Driver.interface'
import { IJourneyInfo } from '../../Shared/interfaces/Journey.interface'
import { getDriverById } from '../../Shared/services/driver'
import JourneyService from '../../Shared/services/journey'
import { MarkerImageType } from '../../Shared/interfaces/Marker.interface'

import UserService, { getUserById } from '../../Shared/services/user'
import MainLayout from '../layouts/main'
import KidsPart from '../main/kids'
import LinearProgress from '@material-ui/core/LinearProgress'
import Map from '../../Shared/Map'
import Footer from './footer'
import { AiOutlineCloseSquare } from 'react-icons/ai'

import './style.scss'
import dayjs from 'dayjs'

const STAY_TIME = 10000

export default function OnBoard() {
  const userId = UserService.getMyId()
  const [kids, setKids] = useState<IKid[]>([])
  const [selectedKid, setSelectedKid] = useState(0)
  const [startTime, setStartTime] = useState<any>(null)
  const [driver, setDriver] = useState<IDriverInfo | null>(null)
  const [currentJourney, setCurrentJourney] = useState<IJourneyInfo | null>(null)
  const [_, setTick] = useState<any>(new Date())
  
  const handleArrival = (intervalId: ReturnType<typeof setInterval>) => {
    clearInterval(intervalId)
    setIsArrived(true)
    setShowMap(false)
  }
  
  useEffect(() => {
    handleGetKids()
    const asyncFunc = async () => {
      const { journeys } = await getUserById(userId)
      setCurrentJourney(journeys[journeys.length - 1])
      const driverInfo = await getDriverById(journeys[journeys.length - 1]?.driverId)
      setDriver(driverInfo)
    }
    asyncFunc()

    setStartTime(new Date())
    const intervalId:ReturnType<typeof setInterval> = setInterval(() => {
      setTick(new Date())
    }, 1000)

    const timeoutId = setTimeout(() => {
      handleArrival(intervalId)
    }, STAY_TIME)

    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId)
    }
  }, [])
  
  const handleGetKids = async () => {
    const data = await UserService.getKids(userId)
    setKids(data)
  }

  const [isArrived, setIsArrived] = useState(false)
  useEffect(() => {
    if(!isArrived || !currentJourney) return
    JourneyService.completeJourney(currentJourney.id)
  }, [isArrived, currentJourney])

  const [showMap, setShowMap] = useState(false)
  useEffect(() => {
    if (showMap && currentJourney) {
      setInterval(async () => {
        const driverInfo = await getDriverById(currentJourney?.driverId)
        setDriver(driverInfo)
      }, 1000)
    }
  }, [showMap])

  const percentage = (dayjs(new Date()).diff(startTime) / STAY_TIME) * 100
  const [redirectPath, setRedirectPath] = useState('')
  if (redirectPath) return <Redirect to={redirectPath} />
  return (
    <MainLayout>
      {showMap && driver ? (
        <>
          <AiOutlineCloseSquare
            color="black"
            size="3rem"
            className="close-button"
            onClick={() => setShowMap(false)}
          />
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
        </>
      ) : (
        <>
          <KidsPart {...{ kids, setKids, selectedKid, setSelectedKid }} />
          <div className="info-text">
            <p>
              <strong>{kids[selectedKid]?.name}</strong>
              {isArrived ? ` arrived!` : ` is moving!`}
            </p>
          </div>
          <div className="progress">
            <LinearProgress
              variant="determinate"
              value={
                isArrived
                  ? 100
                  : percentage
              }
            />
            <div className="progress-text">
              <p>Start</p>
              <p>Destination</p>
            </div>
          </div>
          <div className="speed">
            {isArrived ? null : <p>{driver?.fmsReport.speed}Km/h</p>}
          </div>
          <div className="driver">
            <p>Driver's Info</p>
            <div className="driver-info">
              <div className="driver-profile">
                <img src={driver?.avatarUrl} alt="avatar"/>
              </div>
              <div className="driver-text">
                <p>
                  <strong>{driver?.name}</strong>
                  {` is taking care of your kid!`}
                </p>
                <p>{`${driver?.phoneNumber}`}</p>
              </div>
            </div>
          </div>
          {isArrived ? (
            <Footer text="Home" onClick={() => setRedirectPath('/')} />
          ) : (
            <Footer text="Map" onClick={() => setShowMap(true)} />
          )}
        </>
      )}
    </MainLayout>
  )
}
