

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
            return state.filter(item=>!item.completed)
        case 'COMPLETED':
            return (state.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        completed: !item.completed
                    };
                } else {
                    return item;
                }
                }));
                    
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