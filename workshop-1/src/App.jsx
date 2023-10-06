import "./App.css";
import { useState } from "react";
import { Cart } from "./components/Cart";
import { Inventory } from "./components/Inventory";

export default function App() {
    const [cart, setCart] = useState({})

    const addItem = (item) => {
    	// clone the cart
        const updatedCart = { ...cart }
        // +1 item or init to 1
        updatedCart[item] = (updatedCart[item] || 0) + 1
        // update cart
        setCart(updatedCart);
        console.log(`Added "${item}" to cart`)
    }

    const removeItem = (item) => {
        // clone the cart
        const updatedCart = { ...cart }
        if (updatedCart[item] > 1) {
            updatedCart[item] -= 1
        } else {
			// remove whole item if not >1
            delete updatedCart[item]
        }
        // update cart
        setCart(updatedCart);
        console.log(`Removed "${item}" from cart`)
    }

    return (
        <div>
            <Inventory addItem={addItem} />
            <Cart cart={cart} removeItem={removeItem} />
        </div>
    )
}
