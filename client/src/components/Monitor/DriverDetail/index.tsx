import { memo } from 'react'
import dayjs from 'dayjs'
import { IoIosArrowBack } from 'react-icons/io'
import { usePollingFetch } from '../../Shared/hooks'
import { getDriverById } from '../../Shared/services/driver'

import { IDriverInfo } from '../../Shared/interfaces/Driver.interface'
import carImage from '../../../assets/images/car_big.png'
import './style.scss'

export type DriverDetailProps = Pick<
  IDriverInfo,
  'id' | 'name' | 'journeys'
> & {
  onBack: () => void
}

function DriverDetail({ id, name, journeys, onBack }: DriverDetailProps) {
  const { data: driver } = usePollingFetch(
    async () => await getDriverById(id),
    2000
  )

  if (!driver) {
    return null
  }

  const { fmsReport } = driver

  return (
    <div className="driver-detail">
      <div className="detail-header">
        <div className="header-left">
          <IoIosArrowBack onClick={onBack} />
          <p>{name}</p>
        </div>
        {journeys[journeys.length - 1]?.status.toLowerCase()}
      </div>
      <div className="detail-image">
        <img src={carImage} alt="Car" />
        <div className="speed">
          <p>Speed</p>
          <p>
            <strong>{fmsReport?.speed}</strong>
          </p>
          <div className="progress-bar">
            <div
              className="actual-bar"
              style={{
                height: `${100 - Math.floor((fmsReport?.speed / 60) * 100)}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="detail-info">
        <div className="info-cell">
          <p>Timestamp</p>
          <p>
            <strong>{dayjs(new Date()).format('HH:mm:ss')}</strong>
          </p>
        </div>
        <div className="info-cell">
          <p>Accel Pedal Position</p>
          <p>
            <strong>{fmsReport?.accelPedalPos.toFixed(2)}</strong>
          </p>
        </div>
        <div className="info-cell">
          <p>Brake Position</p>
          <p>
            <strong>{fmsReport?.brakePedalPos.toFixed(2)}</strong>
          </p>
        </div>
        <div className="info-cell">
          <p>Brake Status</p>
          <p>
            <strong>{fmsReport?.brakeStatus}</strong>
          </p>
        </div>
        <div className="info-cell">
          <p>Battery Supply Voltage</p>
          <p>
            <strong>{fmsReport?.batterySupplyVoltage}</strong>
          </p>
        </div>
        <div className="info-cell">
          <p>External Lamp Status</p>
          <p>
            <strong>{fmsReport?.externalLampStatus ? 'On' : 'Off'}</strong>
          </p>
        </div>
      </div>
    </div>
  )
}

export default memo(DriverDetail)
