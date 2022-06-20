import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {

  return (
    <div className='container'>
      <h3>Todos List</h3>
      {props.todos.length === 0 ? "No Todos To display" :
        
          props.todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}></TodoItem>;
            // return (
            //   <>
            //     {/* <h3>this</h3> */}
            //     <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}></TodoItem>
            //   </>)
          })
        
      }


    </div>
  )
}
