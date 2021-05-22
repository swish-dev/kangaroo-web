import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import userService from '../../Shared/services/user'

export default function Login() {
  const [nickname, setNickname] = useState('')
  const history = useHistory()

  const handleNicknameChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(value)
  }

  const handleLogin = async () => {
    try {
      await userService.login({ nickname })
      history.push('/parent')
    } catch (err) {
      alert(err)
    }
  }

  return (
    <Wrapper>
      <Input value={nickname} onChange={handleNicknameChange} name="nickname" />
      <Submit onClick={handleLogin}>로그인</Submit>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`

const Input = styled.input`
  width: fit-content;
`

const Submit = styled.button``
