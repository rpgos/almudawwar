import './image.scss'

interface ImageProps {
  source: string
}

export default function Image({ source }: ImageProps) {
  return (
    <figure className="image">
      <img src={source} />
    </figure>
  )
}
