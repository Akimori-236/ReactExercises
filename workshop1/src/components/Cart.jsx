import Button from "react-bootstrap/Button"
import ListGroup from 'react-bootstrap/ListGroup'

export function Cart(props) {
    const cart = props.cart
    const itemList = Object.keys(cart)
    return (
        <div>
            <h1>My Cart</h1>
            <ListGroup>
                {itemList.map(item => {
                    return (
                        <ListGroup.Item key={item}>
                            <span>{item} x {cart[item]}</span>
                            <Button variant="outline-danger"  onClick={() => props.onRemoveItem(item)}>Remove</Button>
                        </ListGroup.Item>
                    )
                })}
            </ListGroup>
        </div>
    )
}