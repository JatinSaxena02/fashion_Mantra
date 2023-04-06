import React from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Products from "../components/Products";

const CategoryPage = () => {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="flex flex-col p-5">
        <h1 className="text-[30px]">Men's Cloth</h1>
        <div className="filter-style flex items-center justify-between mt-3">
          <div className="flex">
            <p>Filter by</p>
            <div className="filter-size-color-style">
              <select className="ml-5 border-[2px] border-silver">
                <option disabled>Size</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
              <select className="ml-5 border-[2px] border-silver">
                <option disabled>Color</option>
                <option>yellow</option>
                <option>Green</option>
                <option>Black</option>
              </select>
            </div>
          </div>
          <div className="flex sort-style">
            <p style={{marginLeft:'20px'}}>Sort by</p>
            <select className="ml-5 border-[2px] border-silver">
              <option>Newest First</option>
              <option>Oldest First</option>
              <option>Price (Asc)</option>
              <option>Price (Desc)</option>
            </select>
          </div>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default CategoryPage;
