const serverDataReducer = (state, action) => {
  switch (action.type) {
    case "saveData":
      return { resData: action.payload, loading: false };
    case "showLoader":
      return { ...state, loading: true };
    default:
      return state;
  }
};

export { serverDataReducer };
