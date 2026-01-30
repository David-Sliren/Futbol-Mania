import React from "react";

function Button() {
  return (
    <button
      className="bg-white/20 backdrop-blur-xl text-center w-38 rounded-2xl h-14 relative text-white text-xl font-semibold group cursor-pointer"
      type="button"
    >
      <div className="bg-green-500 rounded-xl h-12 w-[30%] flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[95%] z-10 duration-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          height="25px"
          width="25px"
        >
          <path
            d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
            fill="#000"
          ></path>
          <path
            d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
            fill="#000"
          ></path>
        </svg>
      </div>
      <p className="translate-x-2">Atras</p>
    </button>
  );
}

export default Button;
