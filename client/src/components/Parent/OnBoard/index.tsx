import MainLayout from '../layouts/main'
import KidsPart from '../main/kids'
import './style.scss'

export default function OnBoard() {
  return (
    <MainLayout>
      <KidsPart />
      <div>
        <p>{`${true} is moving!`}</p>
      </div>
    </MainLayout>
  )
}
