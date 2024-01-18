import { useState } from "react";
import Data from "./data.json";
import styled from "styled-components";
import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components";
import Main from "./pages/main";
import Menu from "./components/menu";

function App() {
  const [data, setdata] = useState(Data);
  const [clicked, setclicked] = useState(false);
  return (
    <>
      <Header data={data} clicked={clicked} setclicked={setclicked} />
      <Routes>
        <Route path="/" element={<Navigate to="/Mercury" />} />
        <Route
          path="/:name"
          element={
            <Main data={data} clicked={clicked} setclicked={setclicked} />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
