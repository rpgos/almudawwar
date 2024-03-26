import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  show: boolean
  children: React.ReactNode[]
  handleClose: () => void
}

export default function Modal({ show, children, handleClose }: ModalProps) {
  const divEl = useRef<HTMLElement>(null)
  useEffect(() => {
    const escapeHandler = (event: KeyboardEvent) => {
      if(event.key === "Escape") {
        handleClose();
      }
    }

    const clickHandler = (event: MouseEvent) => {
      if(!divEl.current) { return }

      if(!divEl.current.contains(event.target as Node)) {
        handleClose()
      }
    }

    document.addEventListener('keydown', escapeHandler)
    document.addEventListener('click', clickHandler, true)

    return () => {
      document.removeEventListener('keydown', escapeHandler)
      document.removeEventListener('click', clickHandler)
    }
  }, [])

  const classes = show ? 'modal is-active' : 'modal'

  return ReactDOM.createPortal(
    <div className={classes}>
      <div className="modal-background"></div>
      <div ref={divEl} className="modal-content">
        <section className="modal-card-body is-flex is-flex-direction-column">
            {children}
        </section>
      </div>
      <button className="modal-close is-large" onClick={handleClose}></button>
    </div>,
    document.querySelector('#modal') as HTMLElement
  )
}
