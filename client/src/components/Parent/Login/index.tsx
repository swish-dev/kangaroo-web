import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import UserService from '../../Shared/services/user'
import Button from '../components/Button'
import MainLayout from '../layouts/main'

export default function Login() {
  const [nickname, setNickname] = useState('')
  const history = useHistory()

  const handleNicknameChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(value)
  }

  const validateNickname = () => {
    return nickname.length > 0
  }

  const handleLogin = async () => {
    if (!validateNickname()) {
      alert('you have to enter nickname')
      return
    }

    try {
      await UserService.login({ nickname })
      history.push('/parent')
    } catch (err) {
      alert(err)
    }
  }

  return (
    <MainLayout withoutHeader>
      <Wrapper>
        <P>Please enter your child's name or nickname.</P>
        <Input
          value={nickname}
          onChange={handleNicknameChange}
          name="nickname"
        />
        <Submit theme="filled" onClick={handleLogin}>
          Set
        </Submit>
      </Wrapper>
    </MainLayout>
  )
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 5.5rem;
`
const P = styled.p`
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.6rem;
  letter-spacing: 0em;
  text-align: left;
`

const Input = styled.input`
  width: 100%;
  height: 4.5rem;
  border: none;
  border-bottom: 1px solid black;
  font-size: 1.8rem;
  padding-left: 2rem;
`

const Submit = styled(Button)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 4.8rem;

  width: 100%;
  border-radius: 1rem;
  height: 5rem;

  border: none;
  font-size: 1.6rem;
  font-weight: bold;
`
