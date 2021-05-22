import { IoIosArrowBack } from 'react-icons/io'

import { IDriverInfo } from '../../Shared/interfaces/Driver.interface'
import carImage from '../../../assets/images/car_big.png'
import './style.scss'

interface Props {
  driver: IDriverInfo
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
      </div>
    </div>
  )
}

export default DriverDetail
