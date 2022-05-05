import React from "react"

import "./styles.scss"
import Navbar from "./components/Navbar"
import Journal from "./components/Journal"

import data from "./data"

export default function App() {

    const journalData = data.map(
        (journal) =>
            <Journal
                key={journal.id}
                items={journal}
            />
    )


    return (
        <main>
            <Navbar />
            <div className="journal-list">
                {journalData}
            </div>
        </main>
    )
}