import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import BackIcon from '../../../assets/icons/BackIcon'

export default function BackHeader({ title }: { title?: string }) {
  const history = useHistory()
  const handleBack = () => {
    history.goBack()
  }
  return (
    <Wrapper>
      <button onClick={handleBack}>
        <BackIcon />
      </button>
      {title && <P>{title}</P>}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 4.4rem;

  display: flex;
  align-items: center;
`
const P = styled.p`
  font-size: 1.3rem;
`
