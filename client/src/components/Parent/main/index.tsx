import { Redirect } from 'react-router'
import { useGetUserId } from '../hooks/useGetUserId'

import MainLayout from '../layouts/main'
import Driver from './driver'
import Favorite from './favorite'
import Footer from './footer'
import KidsPart from './kids'
import Title from './title'

export default function Parent() {
  const { userId, isLoading } = useGetUserId()

  if (isLoading) return <></>
  if (!userId) return <Redirect to="/parent/login" />

  return (
    <MainLayout>
      <KidsPart />
      <Title />
      <Favorite />
      <Driver />
      <Footer />
    </MainLayout>
  )
}
