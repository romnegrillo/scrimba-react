import React from "react"
import "./styles.css"

import Navbar from "./components/NavBar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import cardSampleData from "./cardSampleData"

export default function App() {

    const cards = cardSampleData.map((card) => {
        return <Card
            title={card.title}
            description={card.description}
            price={card.price}
            coverImg={card.coverImg}
            stats={card.stats}
            location={card.location}
            openSpots={card.openSpots}
        />
    })

    return (
        <main>
            <Navbar />
            <Hero />
            <div className="card-section">
                {cards}
            </div>

        </main>
    )
}

