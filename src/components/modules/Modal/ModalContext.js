// ModalContext.js

import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const useModalContext = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState({});

  const openModal = modalId => {
    setModals(prevModals => ({
      ...prevModals,
      [modalId]: true,
    }));
  };

  const closeModal = modalId => {
    setModals(prevModals => ({
      ...prevModals,
      [modalId]: false,
    }));
  };

  const isModalOpen = modalId => modals[modalId] || false;

  const value = {
    openModal,
    closeModal,
    isModalOpen,
  };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};
