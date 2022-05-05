import React from "react"

export default function CounterState() {

    const [counter, setCounter] = React.useState(0)


    function add() {
        // setCounter(counter + 1)

        setCounter((oldCounter) => {
            return (
                oldCounter + 1
            )
        })
    }

    function subtract() {
        // setCounter(counter - 1)

        setCounter((oldCounter) => {
            return (
                oldCounter - 1
            )
        })
    }

    return (
        <div className="container">
            <h2>Counter State</h2>

            <div className="container--center counter-container">
                <button
                    className="container--button"
                    onClick={subtract}
                >
                    -
                </button>
                <input
                    type="text"
                    value={counter}
                    className="container--input"
                />
                <button
                    className="container--button"
                    onClick={add}
                >
                    +
                </button>
            </div>

        </div>
    )
}