import Cookies from 'js-cookie'
import Header from '../Header'

import './index.css'

const About = props => {
  const {history} = props
  const Logout = () => {
    Cookies.remove('Token')
    history.replace('/login')
  }

  return (
    <div>
      <div className="color2">
        <Header />
      </div>
      <div className="about-page">
        <h1>Account</h1>
        <hr />
        <p>Member Ship annemvikramreddy@gmail.com</p>
        <p>password:*********</p>
        <hr />
        <p>Plan details Premium </p>
        <button type="button">Ultra HD</button>
      </div>
      <div className="text">
        <button type="button" onClick={Logout} className="button-text">
          Logout
        </button>
      </div>
    </div>
  )
}

export default About
