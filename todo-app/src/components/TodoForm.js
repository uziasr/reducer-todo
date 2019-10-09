import React, {useReducer, useState} from 'react'
import TodoList from './TodoList'
import {reducer} from '../reducers/reducer'
import {initialState} from '../reducers/reducer'

//SET_TITLE
//SET_STATUS

export const TodoForm = ({dispatch})=>{
    // const [state, dispatch] = useReducer(reducer, initialState);
    const [todo, setTodo] = useState('')
    const updateText = (e)=>{
        setTodo(e.target.value)
    }
    const deleteTodo = e =>{
        e.preventDefault()
        dispatch({type:'DELETE' })
    }

    const submitChanges = e =>{
        e.preventDefault()
        console.log(todo)
        dispatch({type:'ADD', payload:todo})
    }
    
    // console.log(state)

    return(
      <div>
          {/* <h1>{state.item}</h1>
          <p>{state.completed}</p>
          <p>{state.id}</p>  */}
        <input
        type='text'
        name='todo'
        onChange={updateText}
        />
        <button onClick={submitChanges}>Submit</button>
        <button onClick={deleteTodo}>Delete</button>        
      </div>
    )
}