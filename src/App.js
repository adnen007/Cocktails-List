import { Routes, Route } from "react-router-dom";
import React from "react";
import Details from "./pages/Details";
import Error from "./pages/Error";

import Home from "./pages/Home";
import About from "./pages/About";
import SharedLayout from "./components/Sharedlayout";
import { useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "./reducers/reducer";
import { AppContext } from "./context/context";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

function App() {
  const [state, dispatch] = useReducer(reducer, { search: "", loading: true });
  const getData = async () => {
    const data = await axios.get(url);
    dispatch({ type: "FETCH_DRINKS", playload: data.data });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app">
      <AppContext value={{ state, dispatch }}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="item:id" element={<Details />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </AppContext>
    </div>
  );
}

export default App;


