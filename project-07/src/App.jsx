import React from "react"

import CounterState from "./components/CounterState"
import FlipState from "./components/FlipState"
import ArrayState from "./components/ArrayState"
import ObjectState from "./components/ObjectState"
import PassingState from "./components/PassingState"

export default function App() {
    return (
        <main>
            <CounterState />
            <FlipState />
            <ArrayState />
            <ObjectState />
            <PassingState />
        </main>
    )
}

// const App = () => {
//   return(
//     <main>
//         <h1>App</h1>
//     </main>
//   )
// }

// export default App