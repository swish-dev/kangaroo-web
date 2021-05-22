import styled from 'styled-components'

export default function MbtisItem({ type, name }: any) {
  return (
    <Wrapper>
      <Img src={`/mbtis/${type}.png`} />
      <Name>{name}</Name>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: fit-content;
  justify-content: center;
  align-items: center;
`

const Img = styled.img`
  height: 64px;
  width: 64px;
  margin-bottom: 1rem;
`

const Name = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  text-align: center;
  opacity: 0.8;
`
