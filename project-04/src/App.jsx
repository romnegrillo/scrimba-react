import React from "react"

import CharacterCard from "./components/CharacterCard"
import potSampleData from "./potSampleData"

import "./styles.css"

export default function App() {

    const potCharacters = potSampleData.map((potCharacter) => {
        return <CharacterCard
            image={potCharacter.image}
            name={potCharacter.name}
            signatureMove={potCharacter.signatureMove}
        />
    })

    return (
        <main className="main-section">
            {potCharacters}
        </main>
    )
}

// <main className="main-section">
//     <CharacterCard
//         image="/images/ryoma.png"
//         name="Ryoma Echizen"
//         signatureMove="Twist Serve"
//     />
//     <CharacterCard
//         image="/images/tezuka.png"
//         name="Tezuka Kunimitsu"
//         signatureMove="Zero Shiki"
//     />
//     <CharacterCard
//         image="/images/fuji.png"
//         name="Fuji Syuske"
//         signatureMove="Higuma Otoshi"
//     />
// </main>
