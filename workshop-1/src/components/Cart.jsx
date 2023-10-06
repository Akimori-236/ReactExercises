import { useState } from "react"

export function Cart(props) {
    const [cart, setCart] = useState([])

    return (
        <div>
            <h1>My Cart</h1>
            <ul>
                {cart}
            </ul>
        </div>
    )
}

export function addItem(itemName) {
    setCart(cart.put())
}