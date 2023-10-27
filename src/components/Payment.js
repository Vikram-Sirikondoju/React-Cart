import React from "react";
import { useLocation } from "react-router-dom";

function Payment() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const price = queryParams.get("price");

  return <div>Total Price is: ₹{price}</div>;
}

export default Payment;
