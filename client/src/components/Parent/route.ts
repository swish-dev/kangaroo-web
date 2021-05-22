import Parent from './main/index'
import Login from './Login'
import Place from './place'
import OnBoard from './OnBoard'
import Driver from './Driver'

const routes = [
  {
    path: '/',
    component: Parent,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/place',
    component: Place,
  },
  {
    path: '/onboard',
    component: OnBoard,
  },
  {
    path: '/driver/:id',
    component: Driver,
  },
]

export default routes
