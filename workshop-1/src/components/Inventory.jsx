export function Inventory(props) {
    const items = ["Apple", "Orleng", "Blackberry", "Pineapple"]
    return (
        <div>
            <h1>Please Select</h1>
            <ul>
                {items.map((i) => {
                    return (
                        <li key={i}>
                            <span>{i}</span>
                            <button onClick={() => props.addItem(i)}>Add</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}