import LinkBox from "../components/LinkBox"
import PageHeader from "../components/PageHeader/PageHeader"
import { externalLinks } from "../constants/links"

function LinksPage() {
  const instagramUrl = externalLinks.find(item => item.name === 'Instagram')?.url || ''
  const githubUrl = externalLinks.find(item => item.name === 'Github')?.url || ''

  return (
    <div className="mt-3">
      <PageHeader title="Streaming and Socials" subtitle="Listen and share." />
      <div className="section">
        <LinkBox text="Streaming services" modalId="streaming-modal" />
        <LinkBox text="Instagram" linkTo={instagramUrl} />
        <LinkBox text="Github (check the site's code)" linkTo={githubUrl} />
        <LinkBox text="Send me an e-mail!" linkTo="mailto:almudawwar@gmail.com" />
      </div>
    </div>
  )
}

export default LinksPage
