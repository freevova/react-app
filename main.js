import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createStore, combineReducers } from 'redux'


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

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

// const combineReducers = (reducers) => {
//   return (state = {}, action) => {
//     return Object.keys(reducers).reduce((nextState, key) => {
//       nextState[key] = reducers[key](
//         state.key,
//         action
//       )
//       return nextState
//     }, {})
//   }
// }

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

let store = createStore(todoApp)

let nextTodoId = 0
class TodoApp extends Component {
  render() {
    return (
      <div>
        <button onClick={ () => {
            store.dispatch({
              type: 'ADD_TODO',
              text: 'Test',
              id: nextTodoId++
            })
          }}
        >
          Add Todo
        </button>
        <ul>
          {this.props.todos.map( todo =>
            <li key={todo.id}>
              {todo.text}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

const render = () => {
  ReactDOM.render(
    <TodoApp
      todos={store.getState().todos}
    />,
    document.getElementById('app')
  )
}


store.subscribe(render)
render()
