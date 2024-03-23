import PageHeader from "../components/PageHeader/PageHeader"

function WorkPage() {
  const introduction: string[] = [
    "I’m a Fullstack Engineer working from Berlin, Germany. Over the past 7 years I've worked on \
    multiple projects with a wide range of team sizes and skills, from 2 to 20+ engineers.",
    "I'm also a musician on my free time, as you can tell, and I've released my debut album in early \
    2024, which I'm immensely proud of."
  ]

  return (
    <div className="mt-3">
      <PageHeader title="I'm Rodrigo." subtitle="A software developer." />
      <div className="section">
      </div>
    </div>
  )
}

export default WorkPage
