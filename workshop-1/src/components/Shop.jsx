import { ShopItem } from "./ShopItem"

export function Shop(props){
    const items = ["Item 1", "Item 2", "Item 3", "Item 4"]
    return (
        <div>
            <h1>Please Select</h1>
            <ul>
                {items.map(
                    item => <li key={item}><ShopItem itemName={item}/></li>
                )}
            </ul>
        </div>
    )
}