import { createContext, useContext } from "react";


export const userContext = createContext({
    todo:[
        {
            id:Date.now(),
            task:"",
            completed:false
        }
    ],
    addTodo:(task)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(id,task)=>{},
    toggleComplete: (id)=>{},
})


export const todoContext = ()=>{
    return useContext(userContext)
}

