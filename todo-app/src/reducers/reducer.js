

export const reducer = (state, action) =>{
    switch(action.type){
        case 'ADD':
         const toDo ={
             item: action.payload,
             completed: false,
             id: Date.now()
         }        
        return([...state,  toDo]);
        case 'DELETE':
            return state.filter(item=>item.completed)
        case 'COMPLETED':
            const currentId = action.payload;
            return state.map(item=>{
                if(item.id===currentId){
                    item.completed = !item.completed
                }
            })
            // return state.filter(item=>item.completed)

        default:
            return state
    }
    
}

export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}]