import { Release } from "../@types/release"
import { releases } from "../constants/releases"
import ReleasesListItem from "./ReleasesListItem"

function ReleasesList() {
  const releaseRows: Release[][] = []

  for (let i = 0; i < releases.length; i += 2) {
    releaseRows.push(releases.slice(i, i + 2))
  }

  return (
    <section className="section">
      {
        releaseRows.map(row => {
          return (
            <div className="columns">
              {
                row.map(release => {
                  return <ReleasesListItem release={release} />
                })
              }
            </div>
          )
        })
      }
    </section>
  )
}

export default ReleasesList
