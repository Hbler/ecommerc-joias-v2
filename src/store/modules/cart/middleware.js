import * as action from "./actions";
import { errorToast } from "../../../components/Toasts";

export const addProductThunk = (id) => (dispatch) => {
  const localCart = JSON.parse(localStorage.getItem("@Kenzieshop:cart")) || {};

  if (localCart[id]) {
    errorToast("Este produto já está no carrinho!");
  } else {
    localCart[id] = 1;
    dispatch(action.addProduct(id));
  }

  localStorage.setItem("@Kenzieshop:cart", JSON.stringify(localCart));
};

export const changeQuantityThunk =
  (id, qtty = 1) =>
  (dispatch) => {
    const localCart =
      JSON.parse(localStorage.getItem("@Kenzieshop:cart")) || {};

    if (qtty === 0) {
      delete localCart[id];
      dispatch(action.removeProduct(id));
    } else {
      localCart[id] = qtty;
      dispatch(action.changeQuantity(id, qtty));
    }

    localStorage.setItem("@Kenzieshop:cart", JSON.stringify(localCart));
  };

export const removeProductThunk = (id) => (dispatch) => {
  const localCart = JSON.parse(localStorage.getItem("@Kenzieshop:cart")) || {};

  delete localCart[id];
  dispatch(action.removeProduct(id));

  localStorage.setItem("@Kenzieshop:cart", JSON.stringify(localCart));
};
