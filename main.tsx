import * as React from 'react'
import { render } from 'react-dom'
import { createStore, Store } from 'redux'

type State = { x: number }

type Action = { type: "add", amount: number } | { type: "remove" }

const reducer = (state: State | undefined, action: Action): State => {
    if (!state) return { x: 0 }
    switch (action.type) {
        case "add": return { ...state, x: state.x + action.amount }
        case "remove": return { ...state, x: state.x - 1 }
    }
}

const store = createStore(reducer)

const App = ({ store }: { store: Store<State, Action>}) =>
    <div>
        <h1> Number:{store.getState().x} </h1>
        <button onClick={()=> store.dispatch({type: "add", amount: 2})}> add number </button>
        <button onClick={()=> store.dispatch({type: "remove"})}> remove number </button>
    </div>

    const draw = () =>render(<App store = {store} />, document.getElementById('app'))
    draw()
    store.subscribe(draw)