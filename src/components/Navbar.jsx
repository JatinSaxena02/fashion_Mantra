import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";

const Navbar = () => {

    const style="right-div cursor-pointer mr-[10px] text-sm";
    

  return (
    <div className="navbar h-[60px] shadow-md relative z-10">
      <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center">
        {/* left div */}
        <div className="left flex flex-1 items-center">
          <div className="language cursor-pointer text-[16px]">en</div>
          <div className="searchInput flex border-[2px] border-solid ml-[10px] p-[5px] border-gray focus-within:border-[#8a4af3] transition-all">
            <input className="input outline-none" type="text" />
            <Search className="font-[10px]" />
          </div>
        </div>
        {/* logo div */}
        <div className="center flex-1 text-center">
          <div className="logo font-bold text-lg">Summer Kings</div>
        </div>
        {/* Right div */}
        <div className="right flex flex-1 items-center justify-end">
          <div className={style}>Register</div>
          <div className={style}>Sign In</div>
          <div className={style}>
            <Badge badgeContent={1} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
