import { useState } from "react"
import { Release } from "../../@types/release"
import Button from "../Button"
import './releasesListItem.scss'
import PageHeader from "../PageHeader/PageHeader"

interface ReleasesListItemProps {
  release: Release
}

function ReleasesListItem({ release }: ReleasesListItemProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  const renderedBack = () => {
    return (
      <div className="is-flex is-flex-direction-column is-flex-grow-1 is-justify-content-space-evenly p-4">
        <span className="title">Title</span>
        <ol className="tracklist">
          <li>Song 1</li>
          <li>Roots, Plants, Galaxies</li>
          <li>Song 3</li>
          <li>Song 4</li>
          <li>Song 5</li>
          <li>Song 6</li>
          <li>Song 7</li>
          <li>Song 8</li>
          <li>Song 9</li>
        </ol>
        <div className="buttons is-justify-content-center">
          <Button text="Listen" rounded dark linkTo="/links" />
          <Button text="Buy" rounded primary />
        </div>
      </div>
    )
  }

  return (
    <div className="column">
      <div className="release-container is-flex">
        {
          isFlipped ? renderedBack() : <img src={release.imageUrl} />
        }
      </div>
      
      <Button text="Flip me!" rounded onClick={handleClick} />
    </div>
  )
}

export default ReleasesListItem
