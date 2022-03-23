const serverDataReducer = (state, action) => {
  switch (action.type) {
    case "saveData":
      return { resData: action.payload, loading: false };
    default:
      return state;
  }
};

export { serverDataReducer };
