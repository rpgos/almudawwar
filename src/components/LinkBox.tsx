interface LinkBoxProps {
  linkTo?: string
  text: string
  onClick?: () => void
}

function LinkBox({ text, linkTo, onClick }: LinkBoxProps) {
  return (
    <a className="box" href={linkTo} target="_blank" onClick={onClick}>
      {text}
    </a>
  )
}

export default LinkBox
