import { createContext, useContext, useState } from "react";

const ModalContext = createContext({
  data: null,
  setValue: (value) => {},
});
export const useModal = () => useContext(ModalContext);

function Modal({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const setModalState = (data) => {
    setIsOpen(data);
  };
  const value = { isOpen, setModalState };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}

export default Modal;
