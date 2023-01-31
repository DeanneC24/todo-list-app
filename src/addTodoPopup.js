import ReactModal from 'react-modal';
import React, { useState } from 'react';
import { SAVE_TODO } from './constants/queries' 
import { useMutation  } from '@apollo/client'

const AddTodoPopup = ({refetch}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [todoName, setTodoName] = useState()
    const [todoDescription, setTodoDescription] = useState()
    
    const [createTask, {data, loading, error }]  = useMutation(SAVE_TODO);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    const handleCloseModal = () => setIsOpen(false);

    const saveTodo = (e) => {
        e.preventDefault()
        const task = {
            name: todoName,
            description: todoDescription,
            status: "IN_PROGRESS",
            category: 2
        }
        createTask({variables: {name: task.name, description: task.description, status:task.status, category:task.category}})
        handleCloseModal(e)
        refetch()
    }

    const handleInputChange = (e) => {
        const target = e.target
        const value = target.value
        const name = target.name

        if (name === "todoName") {
            setTodoName(value)
        }
        else if (name === "todoDescription") {
            setTodoDescription(value)
        }
    }

    return (
        <div>
            <button className='add-button' onClick={setIsOpen}> + </button>
            <ReactModal
                isOpen = {isOpen}
                contentLabel="add-todo"
                // onRequestClose={() => setIsOpen(false)}
            >
                <div className='popup-header'>
                    <button className='close-popup-button' onClick={handleCloseModal}> Close</button>
                    <h2>Add Todo</h2>
                </div>
                <form onSubmit={saveTodo}>
                    <div className='todo-input'>
                        <label htmlFor="todoName">Todo :</label>
                        <input type="text" id="todoName"  onChange={handleInputChange} name="todoName" className="todoName" value={todoName}/>
                    </div>
                    <div  className='todo-input'>
                        <label htmlFor="todoDescription">Description:</label>
                        <input type="text" id="todoDescription" onChange={handleInputChange} name="todoDescription" className="todoDescription" value={todoDescription}/>
                    </div>
                    
                    <input type="submit" value="Submit" className="submit-todo"/>
                </form> 
                
            </ReactModal>
        </div>
    );
}

export default AddTodoPopup;