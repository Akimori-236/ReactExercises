// import "./style.css" // external styling

export function RedBox(props) {
    // INLINE STYLING
    return (
        <div style={{
            height: props.size,
            width: props.size,
            backgroundColor: 1 == 2 ? "red" : "blue"
            // can do conditions
        }}>
        </div>
    )
}


