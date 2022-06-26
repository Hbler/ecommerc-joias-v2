export default function themeReducer(state = true, { type, payload }) {
  switch (type) {
    case "@theme/CHANGE":
      return (state = payload);
    default:
      return state;
  }
}
