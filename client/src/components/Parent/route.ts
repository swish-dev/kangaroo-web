import Parent from './main/index'
import Login from './Login'
import Place from './place'

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
]

export default routes
