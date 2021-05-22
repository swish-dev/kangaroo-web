import dayjs from 'dayjs'
import { IoIosArrowBack } from 'react-icons/io'
import { useSetRequestInterval } from '../../Shared/hooks/useSetRequestInterval'

import { IDriverInfo } from '../../Shared/interfaces/Driver.interface'
import carImage from '../../../assets/images/car_big.png'
import './style.scss'

interface Props {
  driver: IDriverInfo
}

const fmsDATA = {
  driverId: 'string',
  timestamp: new Date(),
  speed: 80,
  brakePos: 0.1,
  brakeStatus: 'GREAT',
  externalLampStatus: true,
  accelPedalPos: 0.5,
  batterSupplyVoltage: 50,
}

function DriverDetail({ driver }: Props) {
  const { name, journeys } = driver
  return (
    <div className="driver-detail">
      <div className="detail-header">
        <div className="header-left">
          <IoIosArrowBack />
          <p>{name}</p>
        </div>
        {journeys[journeys.length - 1]?.status.toLowerCase()}
      </div>
      <div className="detail-image">
        <img src={carImage} />
        <div className="speed">
          <p>Speed</p>
          <p>
            <strong>{fmsDATA.speed}</strong>
          </p>
          <div className="progress-bar">
            <div
              className="actual-bar"
              style={{
                height: `${100 - Math.floor((fmsDATA.speed / 120) * 100)}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="detail-info">
        <div className="info-cell">
          <p>Timestamp</p>
          <p>
            <strong>{dayjs(fmsDATA.timestamp).format('HH:mm:ss')}</strong>
          </p>
        </div>
        <div className="info-cell">
          <p>Accel Pedal Position</p>
          <p>
            <strong>{fmsDATA.accelPedalPos}</strong>
          </p>
        </div>
        <div className="info-cell">
          <p>Brake Position</p>
          <p>
            <strong>{fmsDATA.brakePos}</strong>
          </p>
        </div>
        <div className="info-cell">
          <p>Brake Status</p>
          <p>
            <strong>{fmsDATA.brakeStatus}</strong>
          </p>
        </div>
        <div className="info-cell">
          <p>Battery Supply Voltage</p>
          <p>
            <strong>{fmsDATA.batterSupplyVoltage}</strong>
          </p>
        </div>
        <div className="info-cell">
          <p>External Lamp Status</p>
          <p>
            <strong>{fmsDATA.externalLampStatus ? 'On' : 'Off'}</strong>
          </p>
        </div>
      </div>
    </div>
  )
}

export default DriverDetail
