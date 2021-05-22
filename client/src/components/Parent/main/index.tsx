import { Redirect } from 'react-router'
import { useGetUserId } from '../hooks/useGetUserId'

import { MainLayout } from '../layouts/main'
import { KidsPart } from './kids'

export default function Parent() {
  const { userId, isLoading } = useGetUserId()

  if (isLoading) return <></>
  if (!userId) return <Redirect to="/login" />

  return (
    <MainLayout>
      <KidsPart />
    </MainLayout>
  )
}
