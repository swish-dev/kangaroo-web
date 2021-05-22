import axios from 'axios'
import { useSetRequestInterval } from '../../Shared/hooks/useSetRequestInterval'

import './style.scss'

const dummyData = [
  { id: '35e6a0b7-1060-4b8b-aedc-d6db2029bffd', nickname: 'hi', kids: [] },
  { id: '4fe62c36-e7b3-46f5-84a7-e398ace47424', nickname: 'hi', kids: [] },
  { id: '97926178-2a3b-43b6-9f8c-7b23d322f98f', nickname: 'hi', kids: [] },
  { id: '618a21bf-c980-4273-b4a0-a3cdf1bf94fb', nickname: 'hi', kids: [] },
  { id: 'f74edf70-4d18-4826-a056-6943cc074466', nickname: 'hi', kids: [] },
  { id: '8b13277d-7008-418d-95cc-73e1a71ed7ef', nickname: 'hi', kids: [] },
  { id: '1a76e44c-f692-4eb4-a657-32e230456467', nickname: 'hi', kids: [] },
  { id: '80f6ce1c-e21e-4db2-aebe-b2f89ce1de0a', nickname: 'hi', kids: [] },
  { id: '31b77bb4-efd7-4267-82d2-89443b825500', nickname: '123', kids: [] },
]

function UserList() {
  // const result = useSetRequestInterval(
  //   () => axios.get('http://13.209.76.209/users'),
  //   1000
  // )

  const generateUserList = () => {
    return dummyData.map(({ id, nickname }) => <li key={id}>{nickname}</li>)
  }

  return (
    <div className="user-list">
      <p>test</p>
      {generateUserList()}
    </div>
  )
}

export default UserList
