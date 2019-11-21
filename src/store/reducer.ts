export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "USER":
      return { ...state, user: action.user };
    default:
      return state;
  }
};
