import { useHistory } from 'react-router'
import styled from 'styled-components'

export default function DriverItem({ name, avatarUrl, id }: any) {
  const history = useHistory()

  return (
    <Wrapper
      onClick={() => {
        history.push(`/driver/${id}`)
      }}
    >
      <ImgWrapper>
        <Img src={avatarUrl} />
      </ImgWrapper>
      <P>{name}</P>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
`

const ImgWrapper = styled.div`
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 999px;

  background: grey;
  margin-bottom: 1.2rem;
  position: relative;
  overflow: hidden;
`
const Img = styled.img`
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 999px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`

const P = styled.p`
  width: 6.4rem;
  text-align: center;
  font-weight: bold;
  font-size: 1.1rem;
`
