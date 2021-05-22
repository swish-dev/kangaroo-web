import { useState, useEffect } from 'react'
import { IUserInfo } from '../../Shared/interfaces/User.interface'
import UserService from '../../Shared/services/user'

export const useMe = () => {
  const [user, setUser] = useState<IUserInfo | null>(null)

  const fetch = async () => {
    const data = await UserService.getUserById(UserService.getMyId())
    setUser(data)
  }

  useEffect(() => {
    fetch()
  }, [])

  return user
}

export function useMyId() {
  const [userId, setUserId] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    try {
      setIsLoading(true)
      const userId = UserService.getMyId()
      setUserId(userId)
      setIsLoading(false)
    } catch (err) {}
  }, [])

  return { userId, isLoading }
}
