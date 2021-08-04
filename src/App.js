import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import About from './components/About'
import Popular from './components/Popular'
import Movie from './components/Movie'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/popular" component={Popular} />
      <Route exact path="/movie/:id" component={Movie} />
    </Switch>
  </BrowserRouter>
)
export default App
