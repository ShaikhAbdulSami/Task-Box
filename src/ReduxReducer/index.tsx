import { createSlice, configureStore } from "@reduxjs/toolkit"

  const initialState  = [
    { id: '1', title: 'Get warm clothes before winter season', state: 'TASK_INBOX' },
    { id: '2', title: 'Fix sewerage lines before rain', state: 'TASK_INBOX' },
    { id: '3', title: 'Build an Iron Man suit', state: 'TASK_INBOX' },
    { id: '4', title: 'Get residence permit of Saudi Arabia', state: 'TASK_INBOX' },
  ];


const taskReducer = createSlice({
    name: "tasks",
    initialState: initialState,
    reducers: {

        archive: (state,action) => {
            return state.map( item =>{
            if ( item.id === action.payload.id) {
            return ({

                ...item,
                state:"TASK_ARCHIVED"

            })
            }

            else{

                return item
            }

        })
    },
    add: (state,action) => {
        
        let id = "0";

        if (state.length !== undefined && state.length !== null){

            id = (state.length +1).toString();
        }
        
        return [...state, {id: id, title : action.payload.title, state :"TASK_INBOX"}]    
        

        },
    }
        
})

const store = configureStore({

    reducer: taskReducer.reducer
})

export const { archive, add} = taskReducer.actions
export { taskReducer, store }