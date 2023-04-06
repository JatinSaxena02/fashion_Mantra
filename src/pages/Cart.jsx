import React from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Cart = () => {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="m-5">
        <div
          className="flex justify-center text-5xl
        "
        >
          Cart
        </div>
        <div className="flex items-center justify-between mt-5">
          <button className="btn bg-white text-purple-500 border-2 border-purple-500 hover:text-white">
            Continue Shopping
          </button>
          <div className="flex underline text-lg hover:cursor-pointer">
            <p>Items in your cart : 3</p>
            <p className="ml-5">Wishlist Items : 0</p>
          </div>
          <button className="btn">Checkout</button>
        </div>
        {/* central div */}
        <div className="flex mt-7">
          <div className="flex flex-col flex-1">
            <div>
              <div><img src="" alt="product_img"/></div>
              <div>price and quantity</div>
            </div>
          </div>
          <div>summary</div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Cart;
