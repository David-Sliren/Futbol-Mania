import React from "react";

function SkeletonCard() {
  return (
    <button className="w-full h-28 bg-neutral-700 gap-1 text-[1em] text-white rounded-2xl py-2 px-1.5 flex flex-col justify-center items-center backdrop-blur-3xl cursor-pointer overflow-hidden animate-pulse"></button>
  );
}

export default SkeletonCard;
