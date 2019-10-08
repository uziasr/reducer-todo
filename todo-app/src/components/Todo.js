import React, {useReducer} from 'react'
import {reducer} from '../reducers/reducer'
import {initialState} from '../reducers/reducer'


//SET_TITLE
//SET_STATUS

export const Todo = ()=>{
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state, dispatch)
    return(
      <div>
          <h1>{state.item}</h1>
          <p>{state.completed}</p>
          <p>{state.id}</p>  
      </div>
    )
}
