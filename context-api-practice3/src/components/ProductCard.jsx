import React from "react";

const ProductCard = ({name, image, caloriesPerServing }) => {
  return (
    <div className="flex flex-col items-center bg-slate-50 shadow-lg py-3 px-2 max-w-fit rounded-lg">
    <img src = {image} alt = {name} className = 'rounded-md h-48'/>
        <h1 className="text-sm font-bold text-black">{name}</h1>
        <p className="mt-2 font-bold text-lime-600 ">${caloriesPerServing}</p>
      <button className="px-4 py-2 bg-gray-800 text-white font-semibold rounded-xl hover:bg-gray-600">
          Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
