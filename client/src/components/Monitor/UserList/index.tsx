import { memo } from 'react'
import { getUsers } from '../../Shared/services/user'
import { useSetRequestInterval } from '../../Shared/hooks/useSetRequestInterval'
import { IUserInfo } from '../../Shared/interfaces/User.interface'

import './style.scss'

function UserList() {
  const users: IUserInfo[] = useSetRequestInterval(getUsers, 5000) || []

  const generateUserList = () => {
    return users?.map(({ id, nickname, journeys }) => (
      <li className="user-row" key={id}>
        <p>
          <b>{nickname}</b>
        </p>
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

export default memo(UserList)
