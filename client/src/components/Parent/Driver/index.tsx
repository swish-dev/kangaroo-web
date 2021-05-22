import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { IDriverInfo } from '../../Shared/interfaces/Driver.interface'
import { getDriverById } from '../../Shared/services/driver'
import MainLayout from '../layouts/main'
import DriverProfile, { DriverProfileProps } from './Profile'
import Reviews from './Reviews'
import Mbtis from './Mbtis'
import StarRate from '../components/StarRate'
import styled from 'styled-components'

export default function Driver() {
  const { id } = useParams<{ id: string }>()
  const [driverInfo, setDriverInfo] = useState<IDriverInfo>()

  const getDriverInfo = async () => {
    const data = await getDriverById(id)
    setDriverInfo(data)
  }

  useEffect(() => {
    if (!id) return
    getDriverInfo()
  }, [id])
  if (!driverInfo) return null

  return (
    <MainLayout isBackHeader headerTitle="Driver's info">
      <DriverProfile {...(driverInfo as DriverProfileProps)} />
      <DescSection>
        <StarRate score={driverInfo.rating} mb="1.5rem" />
        <Desc>{driverInfo.description}</Desc>
      </DescSection>
      <Mbtis mbtis={driverInfo.mbtis} />
      <Reviews reviews={driverInfo.reviews} />
    </MainLayout>
  )
}
const DescSection = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  margin-bottom: 2.8rem;
`
const Desc = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  text-align: center;
  padding: 0 2.3rem;
`
