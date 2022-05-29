import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import instagramIcon from '../../assets/instagram.png'
import facebookIcon from '../../assets/facebook.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>Bablu</span>
        <span>Kumar</span>
      </a>
      <div>
        <p>
        This site is very usefull portfolio <img src={reactIcon} alt="React" /> java developer.
          <span>❤️</span>
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/bablu-kumar-a33166221/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/bablu733"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://www.instagram.com/bablu_official073k/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=100017761416303"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebookIcon} alt="facebook" />
        </a>
      </div>
    </Container>
  )
}
