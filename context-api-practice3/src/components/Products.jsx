import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        console.log(data);
        setItems(data.recipes);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchItems();
  }, []);

  return (
    <div className='flex flex-col justify-center'>
      <div className="flex justify-between items-center px-8 py-4">
        <h2 className="text-4xl font-extrabold text-black">Items List</h2>
        <button className='px-2 py-1 text-slate-900 text-3xl font-bold rounded-md hover:bg-zinc-500'>Cart</button>
      </div>

      <div className="flex flex-row flex-wrap justify-center items-center gap-5">
        {items.length > 0 ? (
          items.map((item) => <ProductCard key={item.id} {...item} />)
        ) : (
          <p className="text-center text-gray-500">Loading items...</p>
        )}
      </div>
    </div>
  );
};

export default Products;
