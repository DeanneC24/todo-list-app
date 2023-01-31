import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { useQuery, useMutation  } from '@apollo/client'
import {ALL_TODOS, ALL_CATEGORIES, SAVE_TODO} from './constants/queries'
import AddTodoPopup from "./addTodoPopup"

const TodoApp=() => {

  const {loading, error, data, refetch}  = useQuery(ALL_TODOS, {
      variables: {query: ''}
    });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const addTodo = () => {
    console.log("Adding todo...")
  }

  return(
    <div>
      <h1>Todo <span className='purple-header'>List</span></h1>
      <button className='delete-button' > X </button>
      <AddTodoPopup refetchQueries={refetch}/>

      {/* <button className='add-button' onClick={addTodo}> + </button> */}
      <form className='todos-wrapper'>
          <div>
             {data &&
                data.allTasks.map(( todo, i) => ( //change back to useEffect impl
               
                <div className='todo'>
                  <li key={{i}}> {todo.name} </li>
                </div>
            ))}
          </div>
        </form>
    </div>
  )
}


export default TodoApp