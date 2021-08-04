import {
  AiFillGoogleCircle,
  AiFillTwitterCircle,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from 'react-icons/ai'

import './index.css'

const Socialmedia = () => (
  <div className="social-media color">
    <div>
      <AiFillGoogleCircle className="social-padding" />
      <AiFillTwitterCircle className="social-padding" />
      <AiOutlineInstagram className="social-padding" />
      <AiOutlineYoutube className="social-padding" />
    </div>
    <h1 className="color1">Contact Us</h1>
  </div>
)

export default Socialmedia
