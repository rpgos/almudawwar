interface LinkBoxProps {
  linkTo?: string
  modalId?: string
  text: string
}

function LinkBox({ text, linkTo, modalId }: LinkBoxProps) {
  return (
    <a className="box" href={linkTo} target="_blank">
      {text}
    </a>
  )
}

export default LinkBox
