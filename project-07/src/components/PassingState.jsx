import React from "react"

import boxData from "../boxData"

function Box(props) {

    const styles = {
        backgroundColor: props.on ? "#222222" : "#ffffff",
    }

    return (
        <div
            className="box"
            style={styles}
            onClick={() => props.handleClick(props.id)}
        >
        </div>
    )
}

export default function PassingState() {

    const [box, setBox] = React.useState(boxData)

    const boxElements = box.map((boxParam) => {
        return (
            <Box
                key={boxParam.id}
                id={boxParam.id}
                on={boxParam.on}
                handleClick={handleClick}
            />
        )
    })

    function handleClick(id) {
        setBox((prevBox) => {
             return prevBox.map((prevBoxItem) => {
                return prevBoxItem.id === id ? {...prevBoxItem, on: !prevBoxItem.on} : prevBoxItem 
             })
        })
    }

    return (
        <div className="container">
            <h2>Passing State</h2>
            <p>Box below are separate components. Click to toggle individual states.</p>
            <div className="container--center  passing-state-container">
                {boxElements}
            </div>
        </div>
    )
}