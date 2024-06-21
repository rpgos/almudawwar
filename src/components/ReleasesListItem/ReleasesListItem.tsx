// import { useState } from "react"
// import { GiSideswipe } from "react-icons/gi";
import { Release } from "../../@types/release"
import Button from "../Button"
import './releasesListItem.scss'

interface ReleasesListItemProps {
  release: Release
}

function ReleasesListItem({ release }: ReleasesListItemProps) {
  // const [isFlipped, setIsFlipped] = useState(false)

  // const handleClick = () => {
  //   setIsFlipped(!isFlipped)
  // }

  const renderedBack = () => {
    const columnClass = release.tracklist.length > 3 ? 'long' : ''
    return (
      <div className="release-back is-flex is-flex-direction-column is-flex-grow-1 is-justify-content-space-evenly p-4">
        <span className="title">{release.name}</span>
        <ol className={`tracklist ${columnClass}`}>
          {
            release.tracklist.map(track => <li>{track}</li>)
          }
        </ol>
        <div className="buttons is-justify-content-center">
          <Button text="Listen" rounded dark linkTo="/links" />
          <Button text="Buy" rounded primary linkTo={release.bandcampUrl} />
        </div>
      </div>
    )
  }

  const columnClass = ''
  // const columnClass = isFlipped ? 'flipped' : ''

  return (
    <div className="column is-relative">
      <div className={`release-container is-flex ${columnClass}`}>
        <img className="release-front" src={release.imageUrl} />
        {renderedBack()}
      </div>
      
      {/* <Button className="flip-button is-position-absolute" rounded onClick={handleClick}>
        <GiSideswipe />
      </Button> */}
    </div>
  )
}

export default ReleasesListItem
