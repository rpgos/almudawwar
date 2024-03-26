import PageHeader from "../components/PageHeader/PageHeader"

function AboutPage() {

  return (
    <div className="mt-3">
      <PageHeader title="Al-Mudawwar" subtitle="Music to daydream to" />
      <div className="section">
        <div className="box">
            This page is being worked on and will be available very soon.

            <progress className="progress is-small is-primary mt-5" max="100"></progress>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
