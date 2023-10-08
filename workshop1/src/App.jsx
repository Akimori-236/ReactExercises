import "./App.css";
import { useState } from "react";
import { Cart } from "./components/Cart";
import { Inventory } from "./components/Inventory";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function App() {
    const [cart, setCart] = useState({})

    const onAddItem = (item) => {
        // clone the cart
        const updatedCart = { ...cart }
        // +1 item or init to 1
        updatedCart[item] = (updatedCart[item] || 0) + 1
        // update cart
        setCart(updatedCart);
        console.log(`Added "${item}" to cart`)
    }

    const onRemoveItem = (item) => {
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
        <Row>
            <Col><Inventory class="col" onAddItem={onAddItem} /></Col>
            <Col><Cart class="col" cart={cart} onRemoveItem={onRemoveItem} /></Col>
        </Row >
    )
}
