import spotifyLogo from '../assets/icons/spotify.png'
import bandcampLogo from '../assets/icons/bandcamp.png'
import githubLogo from '../assets/icons/github.png'
import instagramLogo from '../assets/icons/instagram.png'

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
    name: 'Instagram',
    url: 'https://www.instagram.com/al_mudawwar',
    logoPath: instagramLogo
  },
  {
    name: 'Github',
    url: 'https://github.com/almudawwar',
    logoPath: githubLogo
  },
]
