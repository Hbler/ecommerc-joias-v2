import * as actions from "./actionTypes";

export const addProduct = (id) => ({
  type: actions.ADD_PRODUCT,
  payload: id,
});

export const removeProduct = (id) => ({
  type: actions.RMV_PRODUCT,
  payload: id,
});

export const changeQuantity = (id, qtty) => ({
  type: actions.CNG_QTTY,
  payload: { id, qtty },
});
