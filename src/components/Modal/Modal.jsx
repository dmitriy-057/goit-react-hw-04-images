import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalStyled } from './Modal.styled';
import PropTypes from 'prop-types';
const modalRoot = document.querySelector('#modal-root');
export default function Modal({ onClose, children, onClick }) {
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  const handleClickModal = e => {
    const { target, currentTarget } = e;
    if (currentTarget === target) {
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
    <Overlay onClick={handleClickModal}>
      <ModalStyled>{children}</ModalStyled>
    </Overlay>,
    modalRoot
  );
}
Modal.propTypes = { onClose: PropTypes.func };
