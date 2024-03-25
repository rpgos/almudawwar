import { useState } from "react"
import LinkBox from "../components/LinkBox"
import Modal from "../components/Modal"
import PageHeader from "../components/PageHeader/PageHeader"
import { externalLinks } from "../constants/links"

function LinksPage() {
  const [showModal, setShowModal] = useState(false)

  const instagramUrl = externalLinks.find(item => item.name === 'Instagram')?.url || ''
  const githubUrl = externalLinks.find(item => item.name === 'Github')?.url || ''

  return (
    <div className="mt-3">
      <PageHeader title="Streaming and Socials" subtitle="Listen and share." />
      <div className="section">
        <LinkBox text="Streaming services" onClick={() => { setShowModal(true) }} />
        <LinkBox text="Instagram" linkTo={instagramUrl} />
        <LinkBox text="Github (check the site's code)" linkTo={githubUrl} />
        <LinkBox text="Send me an e-mail!" linkTo="mailto:almudawwar@gmail.com" />
        <Modal show={showModal} handleClose={() => { setShowModal(false) }}>
            This page is being worked on and will be available very soon.

            <progress className="progress is-small is-primary mt-5" max="100"></progress>
        </Modal>
      </div>
    </div>
  )
}

export default LinksPage
