import React, {useReducer, useState} from 'react'
import {reducer} from '../reducers/reducer'
import {initialState} from '../reducers/reducer'
import { TodoForm } from './TodoForm';
import Todo from './Todo'

export function TodoList(){
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state)
    console.log(dispatch)
    return(

        <div>
            {state.map(todo=>{
              return <Todo todo={todo} dispatch={dispatch}/>
            })}
            <TodoForm state={state} dispatch={dispatch}></TodoForm>
        </div>
    )
}
