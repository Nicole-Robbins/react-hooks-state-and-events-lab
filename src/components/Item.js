import React, {useState} from "react";

function Item({ name, category }) {
  const [isIn, setIsIn] = useState(true)
  const  cartStatus = isIn ? "Add to Cart" : "Remove from Cart"
  const listname = isIn ? "" : "in-cart"
  function addToCart(){
     setIsIn((isIn) => !isIn)
  }
  
  return (
    <li className={listname}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>{cartStatus}</button>
    </li>
  );
}

export default Item;
