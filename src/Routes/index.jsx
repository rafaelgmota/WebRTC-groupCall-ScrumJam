import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import PreHome from '../pages/PreHome'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PreHome} />
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}
