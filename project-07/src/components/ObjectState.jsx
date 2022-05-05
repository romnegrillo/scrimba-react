import React from "react"

export default function ObjectState() {

    const sampleObject = {
        "name": "Ryoma Echizen",
        "sports": "Tennis",
        "is_main_player": true,
        "age": 12,
    }

    const [playerInfo, setPlayerInfo] = React.useState(sampleObject)

    function toggleIsMainPlayer() {
        setPlayerInfo((prevStatePlayerInfo) => {
            return (
                {
                    ...prevStatePlayerInfo, 
                    is_main_player: !prevStatePlayerInfo.is_main_player,
                }
            )
        })
    }


    return (
        <div className="container">
            <h2>Object State</h2>
      
            <div className="container--center object-container">
                <button className="container--button"
                    onClick={toggleIsMainPlayer}>
                    Toggle Main Player
                </button>

                <p>Name: {playerInfo.name}</p>
                <p>Sports: {playerInfo.sports}</p>
                <p>Main Player: {playerInfo.is_main_player ? "Yes": "No"}</p>
                <p>Age: {playerInfo.age}</p>
            </div>
        </div>
    )
}