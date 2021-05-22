import { useEffect, useState } from 'react'
import UserService from '../../Shared/services/user'
import MainLayout from '../layouts/main'
import KidsPart from '../main/kids'

export default function OnBoard() {
  const [kids, setKids] = useState([])
  const [selectedKid, setSelectedKid] = useState(0)
  useEffect(() => {
    handleGetKids()
  }, [])

  const handleGetKids = async () => {
    const userId = UserService.getMyId()
    const data = await UserService.getKids(userId)

    setKids(data)
  }
  return (
    <MainLayout>
      <KidsPart {...{ kids, setKids, selectedKid, setSelectedKid }} />
    </MainLayout>
  )
}
