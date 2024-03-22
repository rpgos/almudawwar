import classNames from 'classnames'

interface TileItemProps {
  parent?: boolean
  vertical?: boolean
  dark?: boolean
  children?: React.ReactNode
  title?: string
  subtitle?: string
}

function TileItem({ parent, vertical, dark, children, title, subtitle }: TileItemProps) {
  const classes = classNames({
    tile: true,
    notification: !parent,
    'is-parent': parent,
    'is-child': !parent,
    'is-vertical': vertical,
    'is-primary': !dark && !parent,
    'is-dark': dark,
  })

  return <div className={classes}>
    { title && <p className="title is-2">{title}</p>}
    {
      subtitle &&
      <div className="subtitle is-3 mt-2">
        {subtitle}
      </div>
    }
    {children}
  </div>
}

export default TileItem
