import React from "react";
import BannerWithSearch from "../components/bannersearch";

function Cart() {
  return (
    <>
      <BannerWithSearch />
      <div style={{ padding: "40px", color: "white" }}>
        <h2>Cart</h2>
        <p>Your selected products will appear here...</p>
      </div>
    </>
  );
}

export default Cart;
