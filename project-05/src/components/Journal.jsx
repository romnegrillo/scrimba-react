import React from "react"

export default function Journal(props) {

  console.log(props)


  return (
    <article className="journal">

      <div className="journal--image-wrapper">
        <img src={props.items.imagePath}
          alt={props.items.name}
          className="journal--image" />
      </div>

      <div className="journal--info">
        <div className="journal--location">
          <img src="/images/location_pin.png"
            alt="Location Pin Logo"
            className="journal--pin-logo"
          />
          <span className="grey" style={{ fontWeight: "bold", marginRight: "16px" }}>{props.items.country}</span>
          <a href={props.items.googleMapsLink} target="_blank">
            <span className="grey underlined">View on Google Maps</span>
          </a>
        </div>
        <h1 className="journal--title">{props.items.name}</h1>
        <p className="journal--date">{props.items.date}</p>
        <p>{props.items.description}</p>
      </div>
    </article>
  )
}