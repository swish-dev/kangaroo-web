import styled from 'styled-components'

export type FavoriteItemProps = { name: string; imageUrl: string }

export default function FavoriteItem({ name, imageUrl }: FavoriteItemProps) {
  return (
    <Wrapper>
      <Img src={`/images/favorites/${imageUrl}`} />
      <P>{name}</P>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
`
const Img = styled.img`
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 999px;

  margin-bottom: 1.2rem;
`

const P = styled.p`
  width: 6.4rem;
  text-align: center;
  font-weight: bold;
  font-size: 1.1rem;
`
