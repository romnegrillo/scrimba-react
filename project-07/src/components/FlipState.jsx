import React from "react"

export default function FlipState() {

    const [state, setState] = React.useState(true)

    function flipState() {
        setState((oldState) => {

            const newState = !oldState
            return (
                newState
            )
        })
    }

    return (
        <div className="container">
            <h2>Flip State</h2>

            <div className="container--center flip-container">
                <input
                    type="text"
                    value={state ? "Yes" : "No"}
                    className="container--input"
                />
                <button
                    className="container--button"
                    onClick={flipState}
                >
                    Flip
                </button>
            </div>
        </div>
    )
}