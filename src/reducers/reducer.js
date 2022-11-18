const reducer = (state, action) => {
  if (action.type === "FETCH_DRINKS") {
    return { ...state, loading: false, drinks: action.playload.drinks, drinksList: action.playload.drinks };
  }
  if (action.type === "SEARCH") {
    const drinksList = state.drinks.filter((e) => {
      return e.strDrink.toLowerCase().includes(action.playload.toLowerCase());
    });

    return { ...state, search: action.playload, drinksList: drinksList };
  }
  return state;
};
export default reducer;
