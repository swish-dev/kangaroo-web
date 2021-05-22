import styled from 'styled-components'

import { useDrivers } from '../../hooks'
import DriverItem from './item'

export default function Driver() {
  const drivers = useDrivers()

  return (
    <Wrapper>
      <P>Best drivers around you</P>
      <ItemWrapper>
        {drivers?.slice(0, 8).map((driver) => (
          <DriverItem key={driver.id} {...driver} />
        ))}
      </ItemWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const P = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1.6rem;
`

const ItemWrapper = styled.div`
  display: flex;
  width: 100%;
  overflow-y: hidden;
  overflow-x: auto;
  margin-right: -1.6rem;
`
