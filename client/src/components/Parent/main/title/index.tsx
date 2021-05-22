import styled from 'styled-components'

export default function Title() {
  return (
    <Wrapper>
      <P>
        Hi, Where should I take
        <br />
        Minsu?
      </P>
    </Wrapper>
  )
}
const Wrapper = styled.div``

const P = styled.p`
  font-size: 2.4rem;
  font-weight: bold;
`
