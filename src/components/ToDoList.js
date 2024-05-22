import { useState } from 'react';

const ToDoList = () => {
    const [ tasks, setTasks ] = useState(["Wake up early", "Exercise Daily"]);
    const [ newTask, setNewTask ] = useState([]);
    const [ weekendTasks, setWeekendTasks ] = useState(["Go out with Kucchu", "take care of Kucchu"]);

    const handleChange = (event) => {
        setNewTask(event.target.value);
        // console.log(event.target.value);
    }

    const addTask = () => {
        if( newTask.length !== 0)
        {
            const updatedTask = [...tasks, newTask];
            setTasks(updatedTask);
            setNewTask("");
            // console.log(tasks);
        }
    }

    const deleteTask = (index) => {
        const updatedTask = tasks.filter( (_, i) => i !== index );
        setTasks(updatedTask);
    }

    const moveUpTheTask = (index) => {
        if( index > 0 ) {
        const updatedTask = [...tasks];
        [updatedTask[index], updatedTask[index-1]] = 
        [updatedTask[index-1], updatedTask[index]];
        setTasks(updatedTask);
        }
        
    }

    const moveDownTheTask = (index) => {
        if( index < tasks.length -1 ) {
        const updatedTask = [...tasks];
        [updatedTask[index], updatedTask[index + 1]] = 
        [updatedTask[index + 1], updatedTask[index]];
        setTasks(updatedTask);
        }
        
    }

    return(
        <div className="ToDoList text-center mt-10 bg-neutral-200 w-auto h-auto">
            <h1 className='font-bold m-5'> Our Goal Setting App </h1>

            <input 
                type='text'
                value={newTask}
                onChange ={ handleChange }
                placeholder='Enter New Task'
                className='mx-5 px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            />

            <button onClick={ addTask } className='add-button mx-5 px-5 py-2 text-white rounded-md bg-green-700' > Add Task </button>

            <div className='task-list container mx-auto px-4 my-10 bg-neutral-400 w-fit'>
                <ul>
                { tasks.map( (task, index) => 
                <li key = {index} className='my-5'> {task} 
                <button className='mx-5 px-5 py-2 text-white rounded-md bg-red-800' onClick={ () => deleteTask(index) }> Delete </button> 
                <button className = "mx-5 px-5 py-2 text-black rounded-md bg-orange-200" onClick={ () => moveUpTheTask(index) }> Move Up </button> 
                <button className='mx-5 px-5 py-2 text-black rounded-md bg-orange-200' onClick={ () => moveDownTheTask(index) }> Move Down </button> 
                </li> )}
                    
                <li> Special List </li>
                {weekendTasks.map( (task, index) => <li key = {index}> {task} </li>)}
                </ul>
            </div>
        </div>
    );
}

export default ToDoList;