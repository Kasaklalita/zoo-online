import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./components/pages/AboutPage";
import ZooPage from "./components/pages/ZooPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AboutPage />} />
      <Route path="/zoo" element={<ZooPage />} />
    </Routes>
  );
}

export default App;
