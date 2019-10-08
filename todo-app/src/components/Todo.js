import React, {useReducer} from 'react';
import {initialState, reducer} from '../reducers/reducer'
import TodoList from './TodoList'


export const Todo = ({todo, dispatch}) => {
    const completedTodo =e=>{
        dispatch({
            type:'COMPLETED',
            payload:todo.id
        })
    }
    return(
        <div onClick={completedTodo}>
            <p>{todo.item}</p>
        </div>
    )
}
 
    

export default Todo;