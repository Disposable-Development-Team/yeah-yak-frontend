// Modal.js
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FlexContainer } from '@atoms/Flex';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px; /* Adjust the width as needed */
`;

const ModalHeader = styled(FlexContainer)`
  margin-bottom: 15px;
`;

const ModalTitle = styled.h2`
  margin: 0;
`;

const ModalCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const Modal = ({ isOpen, onClose, hasButton = true, title, children }) => {
  const modalRef = useRef();

  const handleCloseModal = e => {
    if (modalRef.current && !modalRef.current?.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleCloseModal);
    return () => {
      document.removeEventListener('mousedown', handleCloseModal);
    };
  }, [handleCloseModal]);

  if (!isOpen) {
    return null;
  }

  return (
    <ModalWrapper>
      <ModalContent className="modal-content" ref={modalRef}>
        <ModalHeader $justifyContent="space-between" $alignItems="center">
          <ModalTitle>{title}</ModalTitle>
          {hasButton && <ModalCloseButton onClick={onClose}>Close</ModalCloseButton>}
        </ModalHeader>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
