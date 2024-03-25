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
}

function Button({ text, linkTo, onClick, primary, outlined, small, medium, large, fullwidth, dark, rounded }: ButtonProps) {
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
      {text}
    </a>
  )
}

export default Button
