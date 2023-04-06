import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Product = (item) => {
  const [hoverEffect, setHoverEffect] = useState(' opacity-0');

  const handleHoverEnter = () => {
    setHoverEffect(' opacity-1 bg-[rgba(0,0,0,0.2)]');
  };
  const handleMouseLeave=()=>{
    setHoverEffect('opacity-0')
  }

  const navigate=useNavigate();

  const movetoproductdetails=()=>{
    navigate('/productpage')
  }

// icon Style
  const iconStyle =
    "h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 cursor-pointer hover:bg-purple-600 hover:text-white hover:scale-[1.5] ease-in-out duration-500";

  return (
    <div
      className="home-products-style flex flex-1 items-center justify-center min-w-[280px] min-h-[350px] overflow-hidden rounded-md shadow-lg m-2 relative"
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={item.src} alt="product_img" className="home-products-img-style"/>
      <div
        className={
          ` flex items-center justify-center w-[100%] h-[100%] absolute ease-in duration-200 ` +
           hoverEffect
        }
      >
        {/* icons */}
        <div className={iconStyle}>
          <ShoppingCartOutlined onClick={movetoproductdetails}/>
        </div>
        <div className={iconStyle}>
          <FavoriteBorderOutlined />
        </div>
        <div className={iconStyle}>
          <SearchOutlined />
        </div>
      </div>
    </div>
  );
};

export default Product;
