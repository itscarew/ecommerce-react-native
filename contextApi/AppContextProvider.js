import React, { useState } from "react";
import { ProductApi } from "../api/api";
import AppContext from "./AppContext";

const AppContextProvider = ({ children }) => {
  const [modal, showModal] = useState(false);
  const [buttonComponent, setButtonComponent] = useState("");
  const [loading, setLoading] = useState(true);

  const openModal = () => {
    showModal(true);
  };

  const closeModal = () => {
    showModal(false);
  };

  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const res = await ProductApi.get(`/`);
      setProducts(res?.data?.data);
    } catch (error) {
      throw error;
    }
  };

  const [categoryProducts, setCategoryProducts] = useState([]);
  const getCategoryProducts = async (category) => {
    try {
      setLoading(true);
      const res = await ProductApi.get(`/category/${category}`);
      setCategoryProducts(res?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const state = {
    modalState: { modal, openModal, closeModal },
    buttonComponentState: { buttonComponent, setButtonComponent },
    productState: {
      products,
      getProducts,
      categoryProducts,
      getCategoryProducts,
    },
    loaderState: { loading },
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
