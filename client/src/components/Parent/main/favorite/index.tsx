import styled from 'styled-components'

import FavoriteItem from './item'

const places = [
  { name: 'Home', imageUrl: 'home1.png' },
  { name: 'Grandpa', imageUrl: 'home2.png' },
  { name: 'School', imageUrl: 'books.png' },
  { name: 'Add', imageUrl: 'add.png' },
]
export default function Favorite() {
  return (
    <Wrapper>
      <P>Favorites</P>
      <ItemWrapper>
        {places.map((v, i) => (
          <FavoriteItem key={i} {...v} />
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
  font-weight: 700;
  margin-bottom: 1.6rem;
`
const ItemWrapper = styled.div`
  display: flex;
  width: 100%;
  overflow-y: hidden;
  overflow-x: auto;
`
