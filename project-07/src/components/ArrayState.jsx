import React from "react"

export default function ArrayState() {

    const initialItemList = ["Item 1", "Item 2"]
    const [itemList, setItemList] = React.useState(initialItemList)

    function addItemToList() {
        setItemList((oldItemList) => {
            // const newItemList = oldItemList.slice()
            // const newItem = document.getElementById("array-input").innerText
            // alert(newItem)
            // newItemList.push(<ul>List Item</ul>)

            return [...oldItemList, `Item ${oldItemList.length + 1}`]
        })
    }

    const itemListElement = itemList.map((item) => <p key={item}>{item}</p>)

    return (
        <div className="container">
            <h2>Array State</h2>

            <div className="container--center array-container">
                <button
                    className="container--button"
                    onClick={addItemToList}
                >
                    Add to List
                </button>

                <ul className="container--list">
                    {itemListElement}
                </ul>
            </div>
        </div>
    )
}