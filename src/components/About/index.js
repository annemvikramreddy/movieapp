import Header from '../Header'

import './index.css'

const About = () => (
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
      <button type="button" className="button-text">
        Logout
      </button>
    </div>
  </div>
)

export default About
