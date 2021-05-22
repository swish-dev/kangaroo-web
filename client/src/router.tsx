import { Switch, Route } from 'react-router-dom'
import routes from './components/routes'

function Router() {
  const generateRoutes = () =>
    routes.map((route, index) => (
      <Route exact key={index} path={route.path}>
        <route.component />
      </Route>
    ))
  return <Switch>{generateRoutes()}</Switch>
}

export default Router
