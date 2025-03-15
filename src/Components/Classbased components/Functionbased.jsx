import React, { useState } from 'react'

const Functionbased = (props) => {
    const [counter, setCounter] = useState(0)
    const myFunction = () => {
        setCounter(counter + 1)

    }


    return (
        <div style={{ textAlign: "center", margin: "auto" }}>
            <h1 style={{ color: "green" }}>
                Counting App
            </h1>
            <p>{props.name}</p>
            <p>Counter:{counter}</p>
            <button onClick={myFunction}>click</button>


        </div>
    )
}

export default Functionbased