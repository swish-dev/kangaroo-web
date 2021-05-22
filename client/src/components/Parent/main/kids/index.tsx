import styled, { css } from 'styled-components'
import * as faker from 'faker'

import { Color } from '../../../Shared/contant/color.enum'
import UserService from '../../../Shared/services/user'

export type KidsPartProps = {
  kids: Array<any>
  setKids: any
  selectedKid: number
  setSelectedKid: any
}

export default function KidsPart({
  kids,
  setKids,
  selectedKid,
  setSelectedKid,
}: KidsPartProps) {
  const id = UserService.getMyId()

  const handleClick = (i: number) => {
    setSelectedKid(i)
  }

  const handleAddKid = async () => {
    const data = await UserService.addKid(id, {
      name: faker.name.findName(),
      age: 7,
      avatarUrl:
        'https://pixabay.com/ko/photos/%EB%8F%85%EC%88%98%EB%A6%AC-%EC%83%88-%EC%9C%A1%EC%8B%9D-%EB%8F%99%EB%AC%BC-%EC%B4%88%EC%83%81%ED%99%94-5083248/',
    })

    setKids(data)
  }

  return (
    <Wrapper>
      {kids?.map((v: any, i: number) => (
        <Kid
          onClick={() => {
            handleClick(i)
          }}
          selected={i === selectedKid}
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
  cursor: pointer;
`

const Kid = styled.div<{ selected: boolean }>`
  width: fit-content;
  height: fit-content;
  padding: 1.3rem 2.3rem;
  background-color: ${(props) => props.selected && Color.g1000};
  border-radius: 1.4rem;
  cursor: pointer;
  ${(props) =>
    props.selected &&
    css`
      p {
        opacity: 1;
      }
    `}
`
const P = styled.p`
  font-size: 1.6rem;
  color: white;
  opacity: 0.3;
`
