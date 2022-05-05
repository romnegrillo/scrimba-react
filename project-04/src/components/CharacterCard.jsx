import React from "react"

export default function CharacterCard(props) {
    return (
        <section className="character-card">
            <img src={props.image}
                alt="Ryoma"
                className="character-card--image" />

            <div className="character-card--info">
                <h1>{props.name}</h1>
                <p>Signature Move: {props.signatureMove}</p>
            </div>
        </section>
    )
}

