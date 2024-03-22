import classNames from 'classnames'

interface TagProps {
  rounded?: boolean
  dark?: boolean
  primary?: boolean
  text: string,
  bold?: boolean
}
export default function Tag({ rounded, dark, primary, text, bold }: TagProps) {
  const classes = classNames({
    tag: true,
    'is-rounded': rounded,
    'is-dark': dark,
    'has-text-primary': dark,
    'is-primary': primary,
    'has-text-weight-bold': bold
  })
  return (
    <span
      className={classes}>
      {text}
    </span>
  )
}
