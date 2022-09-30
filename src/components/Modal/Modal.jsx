import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalStyled } from './Modal.styled';
const modalRoot = document.querySelector('#modal-root');
export default function Modal(props) {
  const { onClose } = props;
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return createPortal(
    <Overlay>
      <ModalStyled>{props.children}</ModalStyled>
    </Overlay>,
    modalRoot
  );
}
