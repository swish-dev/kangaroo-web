import Parent from './main/index'
import Login from './Login'
import Place from './place'
import OnBoard from './OnBoard'
import Driver from './Driver'

const routes = [
  {
    path: '/parent',
    component: Parent,
  },
  {
    path: '/parent/login',
    component: Login,
  },
  {
    path: '/parent/place',
    component: Place,
  },
  {
    path: '/parent/onboard',
    component: OnBoard,
  },
  {
    path: '/parent/driver/:id',
    component: Driver,
  },
]

export default routes
