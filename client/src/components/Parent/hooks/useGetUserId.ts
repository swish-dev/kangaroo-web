import { useState, useEffect } from 'react'
import UserService from '../../Shared/services/user'

export function useGetUserId() {
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
