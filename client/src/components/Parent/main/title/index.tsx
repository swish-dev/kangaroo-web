import styled from 'styled-components'

export default function Title({ kid }: any) {
  return (
    <P>
      {`Hi, Where should I take\n
      ${kid?.name}?
`}
    </P>
  )
}

const P = styled.p`
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 3.6rem;
`
