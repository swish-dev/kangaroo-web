import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <Wrapper>
      <Button to="/schedule">
        <P>schedule</P>
      </Button>
      <Button to="/parent/place">
        <P>Call now</P>
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 3.4rem;
  max-width: inherit;
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`

const Button = styled(Link)`
  display: flex;
  flex: 1;
  margin: 0 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background: grey;
`

const P = styled.p`
  font-size: 1.6rem;
  height: fit-content;
`
