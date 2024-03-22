import { SKILLS } from '../../constants/skills'
import './hero.scss'
import TileGroup from '../TileGroup'
import TileItem from '../TileItem'

function Hero() {
  return (
    <section className="hero is-fullheight mt-5">
      <div className="hero-body is-justify-content-center">
      <TileGroup>
        <TileItem title='Al-Mudawwar' subtitle={`“that which is round”`} />

        <TileItem dark title="Music to daydream to" rows={2} linkTo="/music">
          <figure className="image is-1by1">
            <img src="https://f4.bcbits.com/img/a1328975379_10.jpg" />
          </figure>
        </TileItem>
        
        <TileItem dark title="Software Development" rows={2} linkTo="/work">
          <div className="tags">
            {
              SKILLS.map(skill =>{
                return <span key={skill} className="tag is-rounded">{skill}</span>
              })
            }
          </div>
        </TileItem>

        <TileItem dark subtitle="...and a musical project by" linkTo="/about">
          <p><span className="tag is-primary is-large is-rounded">Rodrigo Guerreiro</span></p>
        </TileItem>
        
      </TileGroup>
      </div>
    </section>
  )
}

export default Hero
