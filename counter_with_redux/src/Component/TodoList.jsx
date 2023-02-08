import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodos, toggleTodos } from "../Redux/action";

const TodoList = () => {
    const {todo} = useSelector((store)=>store)
    const dispatch = useDispatch()
    console.log("TodoList-->",todo)

    const handleDelete =(data)=>{
        console.log("id",data)
        dispatch(deleteTodos(data))
    }

    const handleToggle = (data) => {
        dispatch(toggleTodos(data))
    }
    return(
        <>
        <div>
            <h1>TodoList</h1>
            {
                todo?.length<0?<div>...Loading</div> : todo?.map((item)=>{
                    return(
                        <div key={item.id}>
                        <p>{" "}{item.todo}</p>
                        <p>{item.status?"true":"false"}</p>
                        <button onClick={()=>handleDelete(item.id)}>DELETE</button>
                        <button onClick={()=>handleToggle(item.id)}>TOGGLE</button>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default TodoList