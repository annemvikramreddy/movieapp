import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import About from './components/About'
import Popular from './components/Popular'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/popular" component={Popular} />
    </Switch>
  </BrowserRouter>
)
export default App
