import styled from 'styled-components'

import FavoriteItem from './item'

export default function Favorite() {
  const dummy = ['Home', 'Grandpa']
  return (
    <Wrapper>
      <P>Favorites</P>
      <ItemWrapper>
        {dummy.map((v, i) => (
          <FavoriteItem key={i} name={v} />
        ))}
      </ItemWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 3.6rem;
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
`
