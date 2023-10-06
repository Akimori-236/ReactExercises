import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter(props) {
    const [counter, setCounter] = useState(0)

    function increaseCounter() {
        setCounter(counter+1)
    }
    function decreaseCounter() {
        setCounter(counter-1)
    }
    console.log("Counter increased by 1")
    return (
        <div>
            <CounterDisplay count={counter}/>
            <button onClick={increaseCounter}>+ Counter</button>
            <button onClick={decreaseCounter}>- Counter</button>
        </div>
    )
}