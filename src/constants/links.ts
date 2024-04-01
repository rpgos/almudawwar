import spotifyLogo from '../assets/icons/spotify.png'
import bandcampLogo from '../assets/icons/bandcamp.png'
import githubLogo from '../assets/icons/github.png'
import instagramLogo from '../assets/icons/instagram.png'
import youtubeLogo from '../assets/icons/youtube.png'
import tidalLogo from '../assets/icons/tidal.png'
import appleMusicLogo from '../assets/icons/apple_music.svg'
import youtubeMusicLogo from '../assets/icons/youtube_music.svg'
import amazonMusicLogo from '../assets/icons/amazon_music.png'

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
    url: 'https://github.com/almudawwar/almudawwar',
    logoPath: githubLogo
  },
]

export const streamingLinks: ExternalWebsiteProps[] = [
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/artist/1Zd6VFfOVh04zXMVpK96Xy?si=dszUb5HdS56xxpt7uuhlAw',
    logoPath: spotifyLogo
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/pt/artist/al-mudawwar/1640109838?l=en-GB',
    logoPath: appleMusicLogo
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/watch?v=JqxBaze80dg',
    logoPath: youtubeLogo
  },
  {
    name: 'Tidal',
    // url: 'https://listen.tidal.com/artist/33887618',
    url: 'https://listen.tidal.com/album/339950838',
    logoPath: tidalLogo
  },
  {
    name: 'Bandcamp',
    url: 'https://al-mudawwar.bandcamp.com/album/natureza-sagrada',
    logoPath: bandcampLogo
  },
  {
    name: 'YouTube Music',
    url: 'https://music.youtube.com/channel/UC0-LjdKW71UVGkZVp6-IqUg',
    logoPath: youtubeMusicLogo
  },
  {
    name: 'Amazon Music',
    url: 'https://music.amazon.com/artists/B0B9V3MNMQ/al-mudawwar',
    logoPath: amazonMusicLogo
  },
]
