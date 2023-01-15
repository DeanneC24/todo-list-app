import React from 'react'
import ReactDOM from 'react-dom'
import { useQuery, gql } from '@apollo/client'

const ALL_TODOS = gql`
  query {
    allTasks {
      id
      name
      status
      description
    }
  }
`;

function LoadTodos() {
  const { loading, error, data } = useQuery(ALL_TODOS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.allTasks.map(({id, name, status, description}) => (
    <div key={id}>
      <h3>Task Name: {name}</h3>
      <p>Status: {status}</p> 
      <p>Description: {description}</p> 
    </div>
  ));
}

const TodoApp=() => { 
  return(
    <div>
      <h1>Todo List</h1>
      <h3>Outstanding tasks:</h3>
      <LoadTodos/>
    </div>
    
  ) 
}
  
export default TodoApp
