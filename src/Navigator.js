import React from "react";
import App from "./App";
import { Route, Routes } from "react-router-dom";
import Payment from "./components/Payment";
function Navigator() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
}

export default Navigator;
