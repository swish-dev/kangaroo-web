import { useState } from 'react'
import { useParams } from 'react-router-dom'
import MainLayout from '../layouts/main'

export default function Driver() {
  const { id } = useParams<{ id: string }>()
  const [driverInfo, setDriverInfo] = useState()

  return <MainLayout></MainLayout>
}
