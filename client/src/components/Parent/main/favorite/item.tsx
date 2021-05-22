import styled from 'styled-components'

export default function FavoriteItem({ name, icon }: any) {
  return (
    <Wrapper>
      <IconWrapper />
      <P>{name}</P>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
`
const IconWrapper = styled.div`
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 999px;

  background: grey;
  margin-bottom: 1.2rem;
`

const P = styled.p`
  width: 6.4rem;
  text-align: center;
  font-weight: bold;
  font-size: 1.1rem;
`
