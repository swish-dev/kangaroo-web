import Parent from './main/index'
import Login from './Login'

const routes = [
  {
    path: '/parent',
    component: Parent,
  },
  {
    path: '/parent/login',
    component: Login,
  },
]

export default routes
