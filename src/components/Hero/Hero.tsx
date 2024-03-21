import { Link } from 'react-router-dom'
import { SKILLS } from '../../constants/skills'
import './hero.scss'

function Hero() {
  return (
    <section className="hero is-fullheight mt-5">
      <div className="hero-body">
        <div className="tile is-ancestor is-justify-content-center">
          <div className="tile is-vertical">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification is-primary">
                  <p className="title is-2">Al-Mudawwar</p>
                  <div className="subtitle is-3 mt-2 is-dark">
                    “that which is round”
                  </div>
                </article>

                <Link to="/about" className="tile is-child notification is-dark">
                  <p className="subtitle is-3">...and a musical project by</p>
                  <p><span className="tag is-primary is-large is-rounded">Rodrigo Guerreiro</span></p>
                </Link>
              </div>
              <Link to="/music" className="tile is-parent">
                <article className="tile is-child notification is-dark">
                  <p className="title">Music to daydream to</p>
                  <figure className="image is-1by1">
                    <img src="https://f4.bcbits.com/img/a1328975379_10.jpg" />
                  </figure>
                </article>
              </Link>

              <Link to="/work" className="tile is-parent">
                <article className="tile is-child notification is-dark">
                  <p className="title">Software Development</p>
                  <div className="tags">
                    {
                      SKILLS.map(skill =>{
                        return <span className="tag is-rounded">{skill}</span>
                      })
                    }
                  </div>
                </article>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
