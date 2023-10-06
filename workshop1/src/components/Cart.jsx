export function Cart(props) {
    const cart = props.cart
    const itemList = Object.keys(cart)
    return (
        <div>
            <h1>My Cart</h1>
            <ul>
                {itemList.map(item => {
                    return (
                        <li key={item}>
                            <span>{item} x {cart[item]}</span>
                            <button onClick={() => props.removeItem(item)}>Remove</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}