import { useEffect, useState } from 'react'
import styled from 'styled-components'
import UserService from '../../../Shared/services/user'

export default function KidsPart() {
  const id = UserService.getMyId()
  const [kids, setKids] = useState([])
  const [isSelected, setIsSelected] = useState(0)
  const handleClick = (i: number) => {
    setIsSelected(i)
  }
  useEffect(() => {
    handleGetKids()
  }, [])

  const handleGetKids = async () => {
    const data = await UserService.getKids(id)
    setKids(data)
  }

  const handleAddKid = async () => {
    const data = await UserService.addKid(id, {
      name: 'n',
      age: 7,
      avatarUrl:
        'https://pixabay.com/ko/photos/%EB%8F%85%EC%88%98%EB%A6%AC-%EC%83%88-%EC%9C%A1%EC%8B%9D-%EB%8F%99%EB%AC%BC-%EC%B4%88%EC%83%81%ED%99%94-5083248/',
    })
  }

  return (
    <Wrapper>
      {kids?.map((v: any, i: number) => (
        <Kid
          onClick={() => {
            handleClick(i)
          }}
          selected={i === isSelected}
          key={i}
        >
          <P>{v.name}</P>
        </Kid>
      ))}
      <AddButton onClick={handleAddKid}>
        <P>+add</P>
      </AddButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 2.4rem 0;
  display: flex;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
`

const AddButton = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 1.2rem 2.4rem;
  border: none;
  background: transparent;
`

const Kid = styled.div<{ selected: boolean }>`
  width: fit-content;
  height: fit-content;
  padding: 1.2rem 2.4rem;
  ${(props) => props.selected && `background:#DFDFDF`};
  border-radius: 999px;
`
const P = styled.p`
  font-size: 1.6rem;
`
