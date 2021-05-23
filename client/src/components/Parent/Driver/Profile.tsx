import styled from 'styled-components'
import { IDriverInfo } from '../../Shared/interfaces/Driver.interface'
import BestBadge from '../components/BestBadge'

export type DriverProfileProps = Pick<IDriverInfo, 'name' | 'avatarUrl' | 'age'|'isBest'>
export default function DriverProfile({
  name,
  avatarUrl,
  age,
  isBest
}: DriverProfileProps) {
  return (
    <Wrapper>
      <ImgWrapper >
      {isBest&& <BestBadge/>}
        <Img src={avatarUrl} />
      </ImgWrapper>
      <Name>{name}</Name>
      <P>{`${age} / male`}</P>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.6rem;
`

const ImgWrapper = styled.div`
  width: 89px;
  height: 89px;

  border-radius: 999px;
  position: relative;
  margin-bottom: 2.6rem;
`
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 999px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`

const Name = styled.p`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.2rem;
`

const P = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
  text-align: center;
`
