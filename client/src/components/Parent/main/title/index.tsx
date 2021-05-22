import styled from 'styled-components'
import Strong from '../../components/Strong'

export default function Title({ kid }: any) {
  return (
    <P>
      {`Hi, Where should I take`}
      <br />
      <Strong>{kid?.name}?</Strong>
    </P>
  )
}

const P = styled.p`
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 3.6rem;
`
