import React from "react"

export default function Card(props) {

    return (
        <section className="card" style={{ position: "relative" }}>

            {
                props.openSpots === 0 &&

                <div className="card-badge">
                    SOLD OUT
                </div>
            }

            <img src={`/images/${props.coverImg}`} alt="Card" className="card-image" />

            <div className="card-ratings">
                <img src="/images/star.png" alt="Star" className="card-star" />
                <span>{props.stats.rating}</span>
                <span style={{ color: "grey" }}>({props.stats.reviewCount}) • </span>
                <span style={{ color: "grey" }}>{props.location}</span>
            </div>

            <p>{props.title}</p>
            <p style={{ position: "absolute", bottom: "0px" }}><span style={{ fontWeight: "bold" }}>From ${props.price}</span> / person</p>
        </section>
    )
}

