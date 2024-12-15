import { Children, useState } from "react";
import { createContext } from "vm";
import Products from "../products/page";




const CartContext = createContext();

export const useCart = () => useContext(CartContext);
 
export const CartProvider = ({Children}) => {


const [cartItems , setCartItems] = useState([]);


const addToCart = (product) => {
    setCartItems ((prevItems) => prevItems.filter(item => item.id !== productId))

}
return(
    
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
    {children}
  </CartContext.Provider>
)

}
