import { useReducer, useContext, useState, useEffect, createContext, Children } from "react";
import cartReducer from "../Reducer/cartReducer"



const CartContext = ({ Children }) => {
    useEffect(() => {
        dispatchCart({ type: "INIT_PRODUCTS" })
    })
    const CartContextState = createContext(null);
    const [products, setProducts] = useState([])
    const [cart, dispatchCart] = useReducer(cartReducer, {
        cart: [],
        products: products,
    })
    return (
        <CartContextState.Provider value={{ cart, dispatchCart }}>
            {
                Children
            }
        </CartContextState.Provider>
    )
}
export const CartState = () => {
    return useContext(CartContextState)
}
export default CartContext