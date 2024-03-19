import spotifyLogo from '../assets/icons/spotify.png'
import bandcampLogo from '../assets/icons/bandcamp.png'
import githubLogo from '../assets/icons/github.png'
import linkedinLogo from '../assets/icons/linkedin.png'

interface ExternalWebsiteProps {
  name: string
  url: string
  logoPath: string
}

export const externalLinks: ExternalWebsiteProps[] = [
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/artist/1Zd6VFfOVh04zXMVpK96Xy?si=dszUb5HdS56xxpt7uuhlAw',
    logoPath: spotifyLogo
  },
  {
    name: 'Bandcamp',
    url: 'https://al-mudawwar.bandcamp.com/album/natureza-sagrada',
    logoPath: bandcampLogo
  },
  {
    name: 'Github',
    url: 'https://github.com/almudawwar',
    logoPath: githubLogo
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rodrigopguerreiro/',
    logoPath: linkedinLogo
  },
]
