import { createContext, useContext } from "react";


export const userContext = createContext({
    todos:[
        {
            id:Date.now(),
            todo:"",
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(id,todo)=>{},
    toggleComplete: (id)=>{},
})


export const todoContext = ()=>{
    return useContext(userContext)
}

