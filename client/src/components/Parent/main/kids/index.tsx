import { useEffect, useState } from 'react'
import styled from 'styled-components'
import userService from '../../../Shared/services/user'

export function KidsPart() {
  const id = userService.getMyId()
  const [kids, setKids] = useState([])

  useEffect(() => {
    handleGetKids()
  }, [])

  const handleGetKids = async () => {
    const data = await userService.getKids(id)
    setKids(data)
  }

  const handleAddKid = async () => {
    const data = await userService.addKid(id, {
      name: 'n',
      age: 7,
      avatarUrl:
        'https://pixabay.com/ko/photos/%EB%8F%85%EC%88%98%EB%A6%AC-%EC%83%88-%EC%9C%A1%EC%8B%9D-%EB%8F%99%EB%AC%BC-%EC%B4%88%EC%83%81%ED%99%94-5083248/',
    })
  }
  return (
    <Wrapper>
      {kids?.map((v: any, index) => (
        <p key={index}>{v.name}</p>
      ))}
      <AddButton onClick={handleAddKid}>+</AddButton>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const AddButton = styled.button`
  padding: 1rem;
`
