import styled from 'styled-components'
import { Color } from '../../../Shared/contant/color.enum'
import { IJourneyInfo } from '../../../Shared/interfaces/Journey.interface'
import { getDate } from '../../../Shared/utils/parser'

export type RecentReservationCardProps = IJourneyInfo

export default function RecentReservationCard({
  driver,
  arriveAt,
  arriveRouteEdge,
}: RecentReservationCardProps) {
  const { name, avatarUrl } = driver
  const arriveDate = getDate(arriveAt)

  return (
    <Wrapper>
      <PlaceAndDate>
        <P style={{ color: 'white' }}>{arriveRouteEdge.name}</P>
        <P fw="normal" fs="1.4rem">
          {arriveDate}
        </P>
      </PlaceAndDate>
      <DriverInfo>
        <ProfileInfo>
          <Img src={avatarUrl} />
          <P fs="1.4rem">{name}</P>
        </ProfileInfo>
        <StarRate />
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
  display: flex;
  justify-content: space-between;
`
const DriverInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const ProfileInfo = styled.div`
  width: 70%;
  display: flex;
`

const StarRate = styled.div``

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
