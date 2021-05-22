import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import MainLayout from '../layouts/main'
import DriverProfile from './Profile'
import Reviews from './Reviews'
import Mbtis from './Mbtis'
import StarRate from '../components/StarRate'

import { useDriver } from '../hooks'

export default function Driver() {
  const { id } = useParams<{ id: string }>()
  const driver = useDriver(id)

  if (!driver) return null

  return (
    <MainLayout isBackHeader headerTitle="Driver's info">
      <DriverProfile {...driver} />
      <DescSection>
        <StarRate score={driver.rating} mb="1.5rem" />
        <Desc>{driver.description}</Desc>
      </DescSection>
      <Mbtis mbtis={driver.mbtis} />
      <Reviews reviews={driver.reviews} />
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
