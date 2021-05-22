import Parent from './main/index'
import Login from './Login'
import OnBoard from './OnBoard'

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
    path: '/parent/onboard',
    component: OnBoard,
  },
]

export default routes
