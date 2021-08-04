import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = JwtToken => {
    const {history} = this.props
    Cookies.set('Token', JwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
      request_token: '02755bf428c47a7bf4d47f98f5441591523bda91',
    }
    const url =
      'https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=11f10afd62f65559f5880e6e9146afdc'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: {
        'Content-type': 'application/json',
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    return (
      <div className="login-background">
        <h1 className="login-heading">Movies</h1>
        <div className="login-card-background">
          <h1 className="color text">Sign In</h1>
          <form onSubmit={this.submitForm}>
            <label htmlFor="input-username" className="color">
              Username
            </label>
            <input
              id="input-username"
              onChange={this.onChangeUsername}
              className="input-username"
              type="text"
            />
            <label htmlFor="input-password" className="color">
              Password
            </label>
            <input
              id="input-password"
              type="password"
              onChange={this.onChangePassword}
              className="input-username"
            />
            <div className="text">
              <button type="submit" className="sign-button ">
                Sign In
              </button>
              {showSubmitError && <p className="error-message">*{errorMsg}</p>}
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
