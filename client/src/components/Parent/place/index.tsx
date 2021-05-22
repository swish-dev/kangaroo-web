import React, { useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { getPlaceName } from '../../Shared/utils/parser'

import MainLayout from '../layouts/main'
import RecentReservation from './recent'

export default function Place() {
  const [depart, setDepart] = useState('현위치')
  const [arrive, setArrive] = useState('도착지')
  const history = useHistory()

  const handleDepart = ({ target: { value } }: any) => {
    setDepart(value)
  }

  const handleArrive = ({ target: { value } }: any) => {
    setArrive(value)
  }

  const handleEnterKey = ({
    keyCode,
  }: React.KeyboardEvent<HTMLInputElement>) => {
    if (keyCode === 13) {
      history.push('/parent/final-confirm')
    }
  }

  return (
    <MainLayout isBackHeader>
      <Wrapper>
        <Input
          name="출발지"
          value={depart}
          onChange={handleDepart}
          bgColor="#F0F0F0"
          style={{ marginBottom: '1rem' }}
        />
        <Input
          name="도착지"
          value={arrive}
          onChange={handleArrive}
          onKeyUp={handleEnterKey}
          onKeyPress={handleEnterKey}
          bgColor="#DFDFDF"
          style={{ marginBottom: '3.2rem' }}
        />
        <RecentReservation />
      </Wrapper>
    </MainLayout>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.2rem;
`

const Input = styled.input<{ bgColor: string }>`
  width: 100%;
  height: 4.2rem;
  border: none;
  border-radius: 0.5rem;
  padding: 0 1.6rem;
  font-weight: bold;

  background-color: ${(props) => props.bgColor};
`
