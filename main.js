import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createStore } from 'redux'

const counter = (state = 0, action) => {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

// Store From Scratch
// const createStore = (reducer) => {
//   let state
//   let listeners = []
//   const getState = () => state
//   const dispatch = (action) => {
//     state = reducer(state, action)
//     listeners.forEach(listener => listener())
//     debugger
//   }
//   const subscribe = (listener) => {
//     listeners.push(listener)
//     return () => {
//       listeners = listeners.filter( l => l !== listener)
//     }
//   }

//   dispatch({})
//   return { getState, dispatch, subscribe }
// }

// let store = createStore(counter)

// const Counter = ({ value, onIncrement, onDecrement}) => {
//   return(
//     <div>
//       <h1>{value}</h1>
//       <button onClick={onIncrement}>+</button>
//       <button onClick={onDecrement}>-</button>
//     </div>
//   )
// }

// const render = () => {
//   ReactDOM.render(
//     <Counter
//       value={store.getState()}
//       onIncrement={() => store.dispatch({type: 'INCREMENT'})}
//       onDecrement={() => store.dispatch({type: 'DECREMENT'})}
//     />,
//     document.getElementById('app')
//   )
// }

// store.subscribe(render)
// render()

// document.addEventListener('click', () => {
//   store.dispatch({ type: 'INCREMENT'})
// })


// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// );

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        complited: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }
      return {
        ...state,
        complited: !state.complited
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map((t) => todo(t, action))
    default:
      return state
  }
}

const setVisibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

const todoApp = (state = {}, action) => {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: setVisibilityFilter(state.visibilityFilter, action)
  }
}

let store = createStore(todoApp)

console.log('Initial state.')
console.log(store.getState())
console.log('--------------')

console.log('Dispatching ADD_TODO')
store.dispatch({
  type: 'ADD_TODO',
  id: 0,
  text: 'Go shoping'
})
console.log('Current state.')
console.log(store.getState())
console.log('--------------')

console.log('Dispatching TOGGLE_TODO')
store.dispatch({
  type: 'TOGGLE_TODO',
  id: 0
})
console.log('Current state.')
console.log(store.getState())
console.log('--------------')
