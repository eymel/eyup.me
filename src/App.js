import './App.css'
import FacebookIcon from './images/social-icons/facebook.png'
import GithubIcon from './images/social-icons/github.png'
import InstagramIcon from './images/social-icons/instagram.png'
import MediumIcon from './images/social-icons/medium.png'
import TwitterIcon from './images/social-icons/twitter.png'
import YoutubeIcon from './images/social-icons/youtube.png'
import LinkedinIcon from './images/social-icons/linkedin.png'
import ProfilePhoto from './images/eymel.jpeg'
import CircleUser from './components/circle-user'
const socialLinks = [
  {
    url: 'https://github.com/eymel',
    icon: GithubIcon
  },
  {
    url: 'https://twitter.com/eeymel',
    icon: TwitterIcon
  },
  {
    url: 'https://www.youtube.com/channel/UCFRFQbsLRueMLh0Hg4y-wcw',
    icon: YoutubeIcon
  },
  {
    url: 'https://www.instagram.com/eyymel/',
    icon: InstagramIcon
  },
  {
    url: 'https://www.linkedin.com/in/eyup-yildirim/',
    icon: LinkedinIcon
  }
]
function App() {
  return (
    <div className="App">
      <CircleUser profilePhoto={ProfilePhoto} socialLinks={socialLinks} />

      <div styl>
        <h1>Eyüp Yıldırım</h1>
        <h1>eyup.me</h1>
      </div>
    </div>
  )
}

export default App
