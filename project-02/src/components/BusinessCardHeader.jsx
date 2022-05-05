import React from "react"

export default function BusinessCardHeader() {
    return (
        <div className="business-card-header">
            <img src="/images/gusion.jpg"
                alt="Profile"
                className="business-card-header--header-image" />

            <div className="business-card-header--description">
                <h1>Romulo Negrillo Jr.</h1>
                <h2>Software Engineer</h2>
            </div>

            <div className="business-card-header--buttons">
                <a className="business-card-header--buttons--email"
                    href="mailto:romnegrillo@gmail.com">
                    <i className="icon bi-envelope business-card-footer--icon"></i>
                    Email
                </a>
                <a className="business-card-header--buttons--linkedin"
                    href="https://www.linkedin.com/in/romnegrillo" target="_blank">
                    <i className="icon bi-linkedin business-card-footer--icon"></i>
                    LinkedIn
                </a>
            </div>
        </div>
    )
}