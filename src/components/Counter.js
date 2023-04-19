import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const incrementHandler=()=>{                // callback function
        setCount(count+1)
    }
    const decrementHandler=()=>{                // callback function
        setCount(count-1)
    }
    const restartHandler=()=>{                // callback function
        setCount(0);
    }
    return (
        <div>
            <center>
                <h1>Counter</h1>
                <h1>{count}</h1>
                <button class="increment" onClick={incrementHandler}>Increment</button>&nbsp;&nbsp;
                <button class="decrement" onClick={decrementHandler}>Decrement</button>&nbsp;&nbsp;
                <button class="restart" onClick={restartHandler}>Restart</button>
            </center>
        </div>
    )
}

export default Counter
