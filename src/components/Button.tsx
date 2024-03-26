import classNames from 'classnames'

interface ButtonProps {
  linkTo?: string
  text: string
  onClick?: () => void,
  primary?: boolean,
  outlined?: boolean,
  small?: boolean,
  medium?: boolean,
  large?: boolean,
  fullwidth?: boolean,
  dark?: boolean,
  rounded?: boolean,
  icon?: string
}

function Button({ text, linkTo, onClick, primary, outlined, small, medium, large, fullwidth, dark, rounded, icon }: ButtonProps) {
  const classes = classNames({
    button: true,
    'is-responsive': true,
    'is-primary': primary,
    'is-outlined': outlined,
    'is-dark': dark,
    'is-rounded': rounded,
    'is-small': small,
    'is-medium': medium,
    'is-large': large,
    'is-fullwidth': fullwidth,
  })

  return (
    <a className={classes} href={linkTo} target="_blank" onClick={onClick}>
      {
        icon &&
        <span className="icon">
          <img src={icon}></img>
        </span>

      }
      <span className="is-flex-grow-1">{text}</span>
    </a>
  )
}

export default Button
