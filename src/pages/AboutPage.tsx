import Image from "../components/Image/Image"
import PageHeader from "../components/PageHeader/PageHeader"

function AboutPage() {

  return (
    <div className="about mt-3">
      <PageHeader title="Al-Mudawwar" subtitle="Music to daydream to" />
      <div className="section">
        <div className="content is-large">
          <p className="block">
            Since 5000 years ago until modern times, these lands have been roamed by multiple people. Megalithic
            monuments, a unique writing form and ocupations from roman and islamic people shaped the architecture, landscape
            and namings, like Al-Mudawwar, "the round castle".
          </p>
          <p className="block">A place between the mountains and the plains.</p>
          <Image source="https://i.imgur.com/ARl5SMf.jpeg" />
          {/* <Image source="https://xq2qvv7gox71g5pq.public.blob.vercel-storage.com/adv-hZg9jILMw7GKgpYnC7MqC7KUYc3ssY.jpg" /> */}
        </div>
      </div>
    </div>
  )
}

export default AboutPage
