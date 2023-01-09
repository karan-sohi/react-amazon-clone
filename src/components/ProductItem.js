import classes from "./ProductItem.module.css";
import CartContext from "./store/cart-context";
import { useContext } from "react";

const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);
  const { product } = props;
  const addItemHandler = () => {
    const item = {
      title: product.title,
      price: product.price,
      image: product.image,
      id: product.id
    };
    cartCtx.addItem(item);
  };
  return (
    <div className={classes.product}>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <img src={product.image}></img>
      <div className={classes.addButton}>
        <button className={classes.addToCart} onClick={addItemHandler}>
          Add to Basket
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
