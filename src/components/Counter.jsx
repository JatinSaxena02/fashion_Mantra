import React from "react";

const Counter = () => {
  return (
    <div className="flex items-center justify-center text-2xl">
      Quantity
      <div className="ml-5 shadow-sm flex">
        <div className="bg-purple-500 text-white w-8 items-center justify-center flex cursor-pointer rounded-l-md" >-</div>
        <div className="w-8 flex items-center justify-center border-purple-500 border-[2px]">1</div>
        <div className="bg-purple-500 text-white w-8 items-center justify-center flex cursor-pointer rounded-r-md" >+</div>
      </div>
    </div>
  );
};

export default Counter;
