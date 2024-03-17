import { Release } from "../common/types"

interface ReleasesListItemProps {
  release: Release
}

function ReleasesListItem({ release }: ReleasesListItemProps) {
  return (
    <div className="column">
      <img src={release.imageUrl} />
    </div>
  )
}

export default ReleasesListItem
