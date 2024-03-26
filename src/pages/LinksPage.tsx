import { useState } from "react"
import Button from "../components/Button"
import Modal from "../components/Modal"
import PageHeader from "../components/PageHeader/PageHeader"
import { externalLinks, streamingLinks } from "../constants/links"

function LinksPage() {
  const [showModal, setShowModal] = useState(false)

  const instagramUrl = externalLinks.find(item => item.name === 'Instagram')?.url || ''
  const githubUrl = externalLinks.find(item => item.name === 'Github')?.url || ''

  return (
    <div className="mt-3">
      <PageHeader title="Streaming and Socials" subtitle="Listen and share." />
      <div className="section">
        <div className="buttons">
          <Button primary outlined rounded fullwidth large text="Streaming services" onClick={() => { setShowModal(true) }} />
          <Button primary outlined rounded fullwidth large text="Instagram" linkTo={instagramUrl} />
          <Button primary outlined rounded fullwidth large text="Github (check the site's code)" linkTo={githubUrl} />
          <Button primary outlined rounded fullwidth large text="Send me an e-mail!" linkTo="mailto:almudawwar@gmail.com" />
        </div>

        <Modal show={showModal} handleClose={() => { setShowModal(false) }}>
          <figure className="image is-128x128 is-align-self-center">
            <img className="is-rounded" src="https://f4.bcbits.com/img/a1408437784_10.jpg" />
          </figure>
          <div className="buttons mt-5">
            {
              streamingLinks.map(service => {
                return <Button primary outlined rounded fullwidth medium text={service.name} linkTo={service.url} icon={service.logoPath} />
              })
            }
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default LinksPage
