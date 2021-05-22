import { useHistory } from 'react-router'
import styled from 'styled-components'

import { IDriverInfo } from '../../../Shared/interfaces/Driver.interface'
import TouchBox from '../../components/TouchBox'

export type DriverItemProps = Pick<IDriverInfo, 'id' | 'name' | 'avatarUrl'>

export default function DriverItem({ name, avatarUrl, id }: DriverItemProps) {
  const history = useHistory()

  return (
    <TouchBox style={{marginRight: '2rem'}}>
      <Wrapper
        onClick={() => {
          history.push(`/driver/${id}`)
        }}
      >
        <Img src={avatarUrl} />
        <P>{name}</P>
      </Wrapper>
    </TouchBox>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  
`

const Img = styled.img`
  width: 6.4rem;
  height: 6.4rem;
  margin-bottom: 1.2rem;
  border-radius: 9999px;

  object-fit: cover;
`

const P = styled.p`
  width: 6.4rem;
  text-align: center;
  font-weight: bold;
  font-size: 1.1rem;
`
