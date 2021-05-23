import { useHistory } from 'react-router'
import styled from 'styled-components'

import { IDriverInfo } from '../../../Shared/interfaces/Driver.interface'
import BestBadge from '../../components/BestBadge'
import TouchBox from '../../components/TouchBox'

export type DriverItemProps = Pick<IDriverInfo, 'id' | 'name' | 'avatarUrl'|'isBest'>

export default function DriverItem({ name, avatarUrl, id,isBest }: DriverItemProps) {
  const history = useHistory()

  return (
    <TouchBox style={{marginRight: '2rem'}}>
      <Wrapper
        onClick={() => {
          history.push(`/driver/${id}`)
        }}
      >
        <ImgWrapper>
        {isBest && <BestBadge/>}
        <Img src={avatarUrl} />
        </ImgWrapper>
        <P>{name}</P>
      </Wrapper>
    </TouchBox>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  
`

const ImgWrapper = styled.div`
width: 6.4rem;
  height: 6.4rem;
  margin-bottom: 1.2rem;
  border-radius: 9999px;
  position:relative;
`;
const Img = styled.img`
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 9999px;

  object-fit: cover;
`

const P = styled.p`
  width: 6.4rem;
  text-align: center;
  font-weight: bold;
  font-size: 1.1rem;
`
