import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import styled from 'styled-components'
import JourneyService from '../../Shared/services/journey'
import UserService from '../../Shared/services/user'

import MainLayout from '../layouts/main'
import RecentReservation from './recent'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Place() {
  const [depart, setDepart] = useState('Pick Up Location')
  const [arrive, setArrive] = useState('Where to?')
  const history = useHistory()
  const query = useQuery();
   
  const handleDepart = ({ target: { value } }: any) => {
    setDepart(value)
  }

  const handleArrive = ({ target: { value } }: any) => {
    setArrive(value)
  }

  const handleEnterKey = async ({
    keyCode,
  }: React.KeyboardEvent<HTMLInputElement>) => {
    if (keyCode === 13) {
      const userId= UserService.getMyId();
      const kid = query.get('kids');
      try{
        await JourneyService.createJourney({userId, kidIds:[kid as string]});
      }catch(err){
        alert('There are no drivers available. Please wait a minute');
      }
      history.push('/onboard')
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
