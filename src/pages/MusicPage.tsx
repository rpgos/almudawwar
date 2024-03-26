import ReleasesList from "../components/ReleasesList"
import PageHeader from "../components/PageHeader/PageHeader"



function MusicPage() {

  return (
    <div className="mt-3">
      <PageHeader title="Releases" />
      <ReleasesList />
    </div>
  )
}

export default MusicPage
