import './hero.scss'
import TileGroup from '../TileGroup'
import TileItem from '../TileItem'
import { releases } from '../../constants/releases'

function Hero() {
  const getReleaseCover = (): string => {
    return releases[Math.floor(Math.random() * releases.length)].imageUrl
  }

  return (
    <section className="hero is-fullheight mt-5">
      <div className="hero-body ">
      <TileGroup>
        <TileItem title='Al-Mudawwar' subtitle={`“that which is round”`} rows={2} />

        <TileItem dark title="Music to daydream to" rows={2} linkTo="/music">
          <figure className="image is-1by1">
            <img src={getReleaseCover()} />
          </figure>
        </TileItem>
        
        <TileItem dark subtitle="...a musical project by" linkTo="/about" rows={2}>
          <p><span className="tag is-primary is-large is-rounded">Rodrigo Guerreiro</span></p>
        </TileItem>
        
      </TileGroup>
      </div>
    </section>
  )
}

export default Hero
