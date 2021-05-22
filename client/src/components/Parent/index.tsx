import { useState, useEffect } from 'react'
import { Cookies } from 'react-cookie'
import { Redirect } from 'react-router'

import { MainLayout } from './layouts/main'

export default function Parent() {
  const [userId, setUserId] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    try {
      setIsLoading(true)
      const cookie = new Cookies()
      const userId = cookie.get('userId')

      setUserId(userId)
      setIsLoading(false)
    } catch (err) {}
  }, [])
  if (isLoading) return <></>
  if (!userId) return <Redirect to="/login" />
  return <MainLayout></MainLayout>
}
