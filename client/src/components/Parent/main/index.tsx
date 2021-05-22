import { useEffect, useState } from 'react'
import { Redirect } from 'react-router'
import UserService from '../../Shared/services/user'
import { useMyId } from '../hooks'

import MainLayout from '../layouts/main'
import Driver from './driver'
import Favorite from './favorite'
import Footer from './footer'
import KidsPart from './kids'
import Title from './title'

export default function Parent() {
  const { userId, isLoading } = useMyId()
  const [kids, setKids] = useState([])
  const [selectedKid, setSelectedKid] = useState(0)
  useEffect(() => {
    if (!userId) return
    handleGetKids(userId)
  }, [userId])

  const handleGetKids = async (userId: any) => {
    const data = await UserService.getKids(userId)
    setKids(data)
  }

  if (isLoading) return <></>
  if (!userId) return <Redirect to="/login" />

  return (
    <MainLayout>
      <KidsPart {...{ kids, setKids, selectedKid, setSelectedKid }} />
      <Title kid={kids[selectedKid]} />
      <Favorite />
      <Driver />
      <Footer kid={kids[selectedKid]} />
    </MainLayout>
  )
}
