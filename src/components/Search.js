const Search = ({ dispatch, state }) => {
  return (
    <form className="search">
      <label htmlFor="#search">Search Your Favorite Cocktail</label>
      <input
        id="search"
        type="text"
        value={state.search}
        onChange={(e) => dispatch({ type: "SEARCH", playload: e.target.value })}
      />
    </form>
  );
};

export default Search;
