import CartContext from "./cart-context";
import { useState } from "react";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const addItemHandler = (item) => {
    const newItems = [
      ...items,
      {
        title: item.title,
        price: item.price,
        image: item.image,
        id: item.id
      },
    ];
    setItems(newItems);
    const newTotalAmount = parseFloat(totalAmount) + item.price;
    const totalExactAmount = newTotalAmount.toFixed(2);
    setTotalAmount(totalExactAmount);
    setTotalItems(totalItems + 1)
  };

  const removeItemHandler = (id) => {
    const newItems = items.filter(item => item.id !== id)
    setItems(newItems)
    setTotalItems(totalItems - 1)

  };

  const cartCtx = {
    items: items,
    totalAmount: totalAmount,
    totalItems: totalItems,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartCtx}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
