import { externalLinks } from '../../constants/links'
import './footer.scss'

function Footer() {
  return (
    <footer className="footer has-background-info">
      <div className="content has-text-centered">
        © Al-Mudawwar {new Date().getFullYear()}
        <div className="is-flex is-flex-direction-row is-justify-content-center mt-3 is-gap-2">
          {
            externalLinks.map(site => {
              return <div key={site.name}>
              <a href={site.url} target='_blank' aria-label={site.name}>
                <img src={site.logoPath} className='logo' alt="" />
              </a>
            </div>
            })
          }
        </div>
      </div>
    </footer>
  )
}

export default Footer
