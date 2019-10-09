import React, {useReducer} from 'react';
import {initialState, reducer} from '../reducers/reducer'
import TodoList from './TodoList'


export const Todo = ({todo, dispatch}) => {
    const completedTodo =todo=>{
        dispatch({
            type:'COMPLETED',
            payload:todo.id
        })
        // console.log(todo.id)

    }
    return(
        <p onClick={()=>{completedTodo(todo)}}>{todo.item}</p>
    )
}
 
    

export default Todo;