import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { useQuery, useMutation  } from '@apollo/client'
import {ALL_TODOS, ALL_CATEGORIES, SAVE_TODO} from './constants/queries' 

const GetCategories=() => {
  const { loading, error, data } = useQuery(ALL_CATEGORIES);
  
  if (loading) return <p>Loading Categories...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data
}

const TodoApp=() => { 

  const todos  = useQuery(ALL_TODOS);
  const [filteredTodos, setFilteredTodos] = useState()
  const categories = GetCategories()

  useEffect(() => {
    setFilteredTodos(todos)
  }, [todos])

  function handleTodos(e) {
    let categoryType = e.target.value
    categoryType !== "All"
      ? setFilteredTodos(filterTodos(categoryType))
      : setFilteredTodos(todos)
  }

  function filterTodos(categoryType) {
    let todos = todos.allTasks.filter(todo => todo.category.name === categoryType)
    return todos
  }

  // const SaveTodo = e => {
  //   const [newTodo, setNewTodo] = useState({
  //     task: {}
  //   })

  //   // const [saveTodo] = useMutation(SAVE_TODO, {
  //   //   variables: {task: newTodo}
  //   // });
  // }

  return(
    // <div>
    //   <h1>Todo <span className='purple-header'>List</span></h1>
    // </div>
    // <div>
    //    <h1>Todo <span className='purple-header'>List</span></h1>
    //     <div className="sidenav">
    //        <div className='sidenav-title'>Categories</div>
    //           <button className="category-button" onClick={handleTodos} value={"All"}> All </button>
    //          {categories &&
    //           categories.allCategories.map((category, i) => (
    //            <button className="category-button" key={i} onClick={handleTodos} value={category.name}> {category.name} </button>
    //          ))}
    //   </div>
    <div>
      <h1>Todo <span className='purple-header'>List</span></h1>
      <button className='add-button' >Add Todo</button>

      <form>
          <ul>
             {filteredTodos.allTasks.map(( todo, i) => ( //change back to useEffect impl
              <div className='todo'>
                <li key={{i}}> {todo.name} </li>
                <button className='delete-button'>Delete</button>
              </div>
            ))}
          </ul>
        </form>
    </div>
  ) 
}

export default TodoApp


{/* <div className="todo-radio">
//     <input type="radio" key={todo.id} name="todo-radio" value="JavaScript"/>
//     <label htmlFor={todo.id}>{todo.name}</label>
//  </div> */}

{/* <label>
              <input type="radio" name="radio" value="name"/>
              Radio label text
            </label> */}

{/* <form className='todos-wrapper'>
          <div className="radio">
           <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
           <label htmlFor='javascript'>JavaScript</label>
          </div>
        </form> */}

{/* <form className='todos-wrapper'>
<ul>
   {data &&
      data.allTasks.map(( todo, i) => ( //change back to useEffect impl
      <div className='todo'>
        <li key={{i}}> {todo.name} </li>
      </div>
  ))}
</ul>
</form> */}