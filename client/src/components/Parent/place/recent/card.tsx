import dayjs from 'dayjs'
import styled from 'styled-components'

import { Color } from '../../../Shared/contant/color.enum'
import { IJourneyInfo } from '../../../Shared/interfaces/Journey.interface'
import StarRate from '../../components/StarRate'

export type RecentReservationCardProps = IJourneyInfo

export default function RecentReservationCard({
  driver,
  arriveAt,
  arriveRouteEdge,
}: RecentReservationCardProps) {
  const { name, avatarUrl } = driver

  return (
    <Wrapper>
      <PlaceAndDate>
        <P style={{ color: 'white', opacity: 0.7 }}>{arriveRouteEdge.name}</P>
        <P style={{ color: 'white', opacity: 0.3 }} fw="normal" fs="1.4rem">
          {dayjs(arriveAt).format('MM/DD')}
        </P>
      </PlaceAndDate>
      <DriverInfo>
        <Img src={avatarUrl} />
        <P style={{ color: 'white', opacity: 0.3 }} fs="1.4rem">
          {name}
        </P>
        <StarRate
          wrapperStyle={{ marginLeft: 'auto' }}
          score={4}
          offset="0.1rem"
        />
      </DriverInfo>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem 1.6rem;
  margin: 0 auto 1.6rem;
  background-color: ${Color.g300};

  display: flex;
  flex-direction: column;
`

const PlaceAndDate = styled.div`
  width: 100%;
  margin-bottom: 0.8rem;

  display: flex;
  justify-content: space-between;
`

const DriverInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
`

const P = styled.p<{ fw?: string; fs?: string }>`
  font-weight: ${(props) => (props.fw ? props.fw : 'bold')};
  font-size: ${(props) => (props.fs ? props.fs : '1.6rem')};
`

const Img = styled.img`
  height: 3.6rem;
  width: 3.6rem;

  border-radius: 999px;
  margin-right: 0.8rem;
`
