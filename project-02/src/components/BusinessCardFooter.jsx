import React from "react"

export default function BusinessCardFooter() {
    return (
        <div className="business-card-footer">
            <a href="https://www.github.com/romnegrillo"
                target="--blank"
                class="business-card-footer--icon-link">
                <span className="icon bi-github"></span>
            </a>
            <a href="https://www.facebook.com/romnegrillo"
                target="_blank"
                class="business-card-footer--icon-link">
                <span className="icon bi-facebook"></span>
            </a>
            <a href="https://www.instagram.com/romnegrillo"
                target="_blank"
                class="business-card-footer--icon-link">
                <span className="icon bi-instagram"></span>
            </a>
            <a href="https://www.twitter.com/romnegrillo"
                target="_blank"
                class="business-card-footer--icon-link">
                <span className="icon bi-twitter"></span>
            </a>
        </div>
    )
}