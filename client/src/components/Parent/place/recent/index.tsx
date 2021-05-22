import styled from 'styled-components'
import { useMe } from '../../hooks'
import RecentReservationCard from './card'

export default function RecentReservation() {
  const userInfo = useMe()

  return (
    <Wrapper>
      <P>Recent reservation</P>
      {userInfo?.journeys.map((v, i) => (
        <RecentReservationCard key={v.id} {...v} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`
const P = styled.p`
  font-family: Roboto;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.1rem;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 1.8rem;
`
