import axios from 'axios'
// import { useSetRequestInterval } from '../../Shared/hooks/useSetRequestInterval'

import './style.scss'

const dummyData = [
  {
    id: '35e6a0b7-1060-4b8b-aedc-d6db2029bffd',
    nickname: 'hi',
    kids: [],
    journeys: [
      {
        status: 'PENDING',
        departTime: '2021-05-22T09:18:45.639Z',
        arriveTime: '2021-05-22T10:35:30.460Z',
        routeId: '1',
        userId: '6a909401-9433-4532-a9b7-2ad8b942d01b',
        driverId: 'string',
      },
    ],
  },
  {
    id: '4fe62c36-e7b3-46f5-84a7-e398ace47424',
    nickname: 'hi',
    kids: [],
    journeys: [],
  },
  {
    id: '97926178-2a3b-43b6-9f8c-7b23d322f98f',
    nickname: 'hi',
    kids: [],
    journeys: [],
  },
  {
    id: '618a21bf-c980-4273-b4a0-a3cdf1bf94fb',
    nickname: 'hi',
    kids: [],
    journeys: [],
  },
  {
    id: 'f74edf70-4d18-4826-a056-6943cc074466',
    nickname: 'hi',
    kids: [],
    journeys: [],
  },
  {
    id: '8b13277d-7008-418d-95cc-73e1a71ed7ef',
    nickname: 'hi',
    kids: [],
    journeys: [],
  },
  {
    id: '1a76e44c-f692-4eb4-a657-32e230456467',
    nickname: 'hi',
    kids: [],
    journeys: [],
  },
  {
    id: '80f6ce1c-e21e-4db2-aebe-b2f89ce1de0a',
    nickname: 'hi',
    kids: [],
    journeys: [],
  },
  {
    id: '31b77bb4-efd7-4267-82d2-89443b825500',
    nickname: '123',
    kids: [],
    journeys: [],
  },
]

function UserList() {
  const generateUserList = () => {
    return dummyData.map(({ id, nickname, journeys }) => (
      <li className="user-row" key={id}>
        <p>{nickname}</p>
        <p>{journeys[journeys.length - 1]?.status?.toLowerCase()}</p>
      </li>
    ))
  }

  return (
    <div className="user-list">
      <ul> {generateUserList()}</ul>
    </div>
  )
}

export default UserList
