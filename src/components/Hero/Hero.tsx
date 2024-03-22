import { Link } from 'react-router-dom'
import { SKILLS } from '../../constants/skills'
import './hero.scss'
import TileGroup from '../TileGroup'
import TileItem from '../TileItem'

function Hero() {
  return (
    <section className="hero is-fullheight mt-5">
      <div className="hero-body">
        <TileGroup>
          <TileItem parent vertical>
            <TileItem title='Al-Mudawwar' subtitle={`“that which is round”`} />
          
            <Link to="/about">
              <TileItem dark subtitle="...and a musical project by">
                <p><span className="tag is-primary is-large is-rounded">Rodrigo Guerreiro</span></p>
              </TileItem>
            </Link>
          </TileItem>

            <TileItem parent>
              <Link to="/music">
                <TileItem dark title="Music to daydream to">
                  <figure className="image is-1by1">
                    <img src="https://f4.bcbits.com/img/a1328975379_10.jpg" />
                  </figure>
                </TileItem>
              </Link>
            </TileItem>

          <Link to="/work" className="tile">
            <TileItem parent>
              <TileItem dark title="Software Development">
                <div className="tags">
                  {
                    SKILLS.map(skill =>{
                      return <span key={skill} className="tag is-rounded">{skill}</span>
                    })
                  }
                </div>
              </TileItem>
            </TileItem>
          </Link>
        </TileGroup>
      </div>
    </section>
  )
}

export default Hero
