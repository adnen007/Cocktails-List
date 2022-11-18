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

/*
const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s";
console.log(1);
// this funtion is only temporary till i put the context
let list;
async function getData() {
  console.log(2);
  let response = await fetch(baseURL);
  // this code will not work before response get resolved
  list = await response.json();
  // this code will not work list response get resolved

  console.log(3);
  console.log(list);
  //so while the code after await wait till the promise get resolved the code outside the
  // aysnc function will continue to execute and when the promise after the await get
  // resolved the aysnc function will continue to execute but off course its execution
  // context will move to the queue and wait its turn

  // so yeah it just a syntax sugar to then it make sure that the code inside the async
  // function get executed by an orderd but yeah while that the call stack will still get the
  // next execution contexts and execute them.
}

getData();
*/
