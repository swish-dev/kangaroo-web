import styled from 'styled-components'

import DriverItem from './item'

export default function Driver() {
  const dummy = ['James', 'Richard', 'James', 'Richard', 'James', 'Richard']

  return (
    <Wrapper>
      <P>Best drivers around you</P>
      <ItemWrapper>
        {dummy.map((v, i) => (
          <DriverItem key={i} name={v} />
        ))}
      </ItemWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const P = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1.6rem;
`
const ItemWrapper = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  padding-right: -1.8rem;
`
