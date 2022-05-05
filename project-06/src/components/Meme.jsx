import React from "react"
import memesData from "../memesData"

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "Test 1",
        bottomText: "Test 2",
        image: "https://i.imgflip.com/30b1gx.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    
    function getRandomImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const randomImage = memesArray[randomNumber].url

        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                image: randomImage
            }
        })
    }


    return (
        <div className="meme">

            <div class="form">

                <input
                    type="text"
                    placeholder="Top Text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom Text"
                    className="form--input"
                />

                <button type="button"
                    className="form--button"
                    onClick={getRandomImage}
                >
                    Get a new meme image  🖼
                </button>
            </div>

            <img src={meme.image}
                alt="Random Meme"
                className="meme--image"
            />
        </div>
    )
}