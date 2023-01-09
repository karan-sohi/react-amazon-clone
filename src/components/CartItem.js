import classes from "./CartItem.module.css";
import { useContext } from "react";
import CartContext from "./store/cart-context";

const CartItem = (props) => {
  const { productInfo } = props;
  const cartCtx = useContext(CartContext);
  const removeItemHandler = () => {
    cartCtx.removeItem(productInfo.id)
  }
  return (
    <div className={classes.cartProduct}>
      <div className={classes.productImage}>
        <img src={productInfo.image} className={classes.productPic}></img>
      </div>
      <div className={classes.productInfo}>
        <p>{productInfo.title}</p>
        <p>$ {productInfo.price}</p>
        <button onClick={removeItemHandler}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CartItem;
