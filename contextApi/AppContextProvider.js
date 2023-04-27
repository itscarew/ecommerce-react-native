import React, { useState } from "react";
import AppContext from "./AppContext";

const AppContextProvider = ({ children }) => {
  const [modal, showModal] = useState(false);
  const [buttonComponent, setButtonComponent] = useState("");

  const openModal = () => {
    showModal(true);
  };

  const closeModal = () => {
    showModal(false);
  };

  const state = {
    modalState: { modal, openModal, closeModal },
    buttonComponentState: { buttonComponent, setButtonComponent },
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
