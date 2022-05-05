import React from "react"

export default function Header() {
    return (
        <nav className="nav">
            <img src="/images/react_logo_small.png"
                alt="React Logo"
                className="nav--logo"
            />
            <h2 className="nav--title">React Facts</h2>
            <h3 className="nav--project">React Course - Project 1</h3>
        </nav>
    )
}

