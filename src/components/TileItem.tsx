import classNames from 'classnames'
import { Link } from 'react-router-dom'

interface TileItemProps {
  dark?: boolean
  children?: React.ReactNode
  title?: string
  subtitle?: string,
  rows?: number,
  linkTo?: string,
}

function TileItem({ dark, children, title, subtitle, rows, linkTo }: TileItemProps) {
  const classes = classNames({
    cell: true,
    notification: true,
    'is-primary': !dark,
    'has-background-primary-15': dark,
    [`is-row-span-${rows}`]: rows,
  })

  const renderedContent = <>
    { title && <p className="title is-2">{title}</p>}
    {
      subtitle &&
      <div className="subtitle is-3 mt-2">
        {subtitle}
      </div>
    }
    {children}
  </>

  if (linkTo) {
    return <Link className={classes} to={linkTo}>{renderedContent}</Link>
  }


  return <div className={classes}>
    {renderedContent}
  </div>
}

export default TileItem
