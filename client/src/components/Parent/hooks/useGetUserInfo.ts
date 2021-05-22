import { useState, useEffect } from 'react'
import { IUserInfo } from '../../Shared/interfaces/User.interface'
import UserService from '../../Shared/services/user'

export function useGetUserInfo() {
  const [userInfo, setUserInfo] = useState<IUserInfo | null>(null)

  const getUserData = async () => {
    const userId = UserService.getMyId()
    const data = await UserService.getUserById(userId)
    setUserInfo(data)
  }

  useEffect(() => {
    try {
      getUserData()
    } catch (err) {}
  }, [])

  return userInfo
}
