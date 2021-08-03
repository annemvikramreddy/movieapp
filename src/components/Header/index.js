import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  state = {search: ''}

  change = event => {
    this.setState({search: event.target.value})
  }

  render() {
    const {search} = this.state
    console.log(search)
    return (
      <nav className="navbar-background">
        <h1 className="login-heading">Movies</h1>
        <div className="main-links">
          <Link to="/" className="nav-items">
            Home
          </Link>
          <Link to="/popular" className="nav-items">
            Popular
          </Link>
        </div>

        <input type="search" className="search-bar" onChange={this.change} />

        <div className="account-icon">
          <Link to="/about">
            <img
              src="https://image.flaticon.com/icons/png/128/1738/1738691.png"
              alt="icon"
              className="icon"
            />
          </Link>
        </div>
      </nav>
    )
  }
}

export default Header
