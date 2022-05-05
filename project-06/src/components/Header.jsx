import React from "react"

export default function Header() {
    return (
        <div className="header">
            <img src="/images/meme_logo.png"
                alt="Meme Logo"
                className="header--image"

            />
            <h2 className="header--title">Meme Generator</h2>
            <h3 className="header--project">React Course - Project 6</h3>
        </div>
    )
}