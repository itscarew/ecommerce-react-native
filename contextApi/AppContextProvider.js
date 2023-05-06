import React, { useEffect, useState } from "react";
import { CartApi, ProductApi } from "../api/api";
import { getAccessToken, saveAccessToken } from "../utils/AsyncStorage";
import AppContext from "./AppContext";
import jwtDecode from "jwt-decode";
import { MainToast } from "../components/Toast";
import Toast from "react-native-toast-message";

const AppContextProvider = ({ children }) => {
  const [modal, showModal] = useState(false);
  const [cartModal, showCartModal] = useState(false);
  const [buttonComponent, setButtonComponent] = useState("");
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState("");

  const openModal = () => {
    showModal(true);
  };
  const closeModal = () => {
    showModal(false);
  };
  const openCartModal = () => {
    showCartModal(true);
  };
  const closeCartModal = () => {
    showCartModal(false);
  };

  //token stuff
  const fetchAccessToken = async () => {
    const token = await getAccessToken();
    if (token) {
      const decodedToken = jwtDecode(token);
      setToken(token);
      setUserData(decodedToken);
    }
  };

  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const res = await ProductApi.get(`/`);
      setProducts(res?.data?.data);
    } catch (error) {
      MainToast({ type: "error", message: "Can't get products" });
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
      MainToast({ type: "error", message: "Can't get products" });
    }
  };

  const [carts, setCarts] = useState([]);
  const getUserCarts = async () => {
    try {
      const res = await CartApi.get(`/user/${userData?.userId}`);
      setCarts(res?.data?.data);
    } catch (error) {
      MainToast({ type: "error", message: "Can't get carts" });
    }
  };

  const addToCart = async (productId) => {
    try {
      await CartApi.patch(`/myuser/${carts[0]?._id}/${productId}`);
    } catch (error) {
      MainToast({ type: "error", message: "Can't add products. Please Login" });
    }
  };

  const deductQuantityFromCart = async (productId) => {
    try {
      await CartApi.patch(`/myuser/${carts[0]?._id}/${productId}/deduct`);
    } catch (error) {
      MainToast({
        type: "error",
        message: "Can't perfrom operation. Please Login",
      });
    }
  };

  const removeFromCart = async (productId) => {
    try {
      await CartApi.delete(`/myuser/${carts[0]?._id}/${productId}`);
    } catch (error) {
      MainToast({
        type: "error",
        message: "Can't deduct products. Please Login",
      });
    }
  };

  const checkInCart = (id) => {
    const check = carts[0]?.products?.find((product) => {
      return product?.productId?._id === id;
    });
    return check;
  };

  const state = {
    modalState: {
      modal,
      cartModal,
      openModal,
      closeModal,
      openCartModal,
      closeCartModal,
    },
    buttonComponentState: { buttonComponent, setButtonComponent },
    productState: {
      products,
      getProducts,
      categoryProducts,
      getCategoryProducts,
    },
    loaderState: { loading },
    userState: {
      userData,
      setUserData,
      token,
      setToken,
      fetchAccessToken,
    },
    cartState: {
      carts,
      getUserCarts,
      removeFromCart,
      addToCart,
      checkInCart,
      deductQuantityFromCart,
    },
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
