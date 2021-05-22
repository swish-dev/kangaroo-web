import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

export default function BackHeader() {
  const history = useHistory()
  const handleBack = () => {
    history.goBack()
  }
  return (
    <Wrapper>
      <button onClick={handleBack}> b </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 4.4rem;

  display: flex;
  align-items: center;
`
