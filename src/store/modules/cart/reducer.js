import * as actions from "./actionTypes";

const initialState = JSON.parse(localStorage.getItem("@Kenzieshop:cart")) || {};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case actions.ADD_PRODUCT:
      state[payload] = 1;
      return { ...state };
    case actions.RMV_PRODUCT:
      delete state[payload];
      return { ...state };
    case actions.CNG_QTTY:
      const { id, qtty } = payload;
      state[id] = qtty;
      return { ...state };

    default:
      return state;
  }
}
