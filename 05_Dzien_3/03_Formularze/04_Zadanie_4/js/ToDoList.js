import React, {useState} from "react";

const ToDoList = () => {
    const [inputValue, setInputValues] = useState('');
    const [tasks, setTasks] = useState([]);


    const handleAddTask = (e) => {
        e.preventDefault()
        const newTask = {
            id: tasks.length + 1,
            name: inputValue,
            done: false
        };

        setTasks([...tasks, newTask]);
        setInputValues('');
    }

    const handleToggleTask = (taskId) => {
        const updatedTasks = tasks.map((task) => {
            if(task.id === taskId) {
                return {...task, done: !true.done}
            }
            return task
        });

        setTasks(updatedTasks)
    }


    return (
        <div className='toDoList'>
            <form action="" onSubmit={handleAddTask} className='header'>
                <input type="text" name="task" value={inputValue} onChange={(e) => setInputValues(e.target.value)}/>
                <button type='submit'>Dodaj</button>
            </form>
            <ul>
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className={task.done ? 'done' : ''}
                        onClick={() => handleToggleTask(task.id)}
                        >
                        {task.name}
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default ToDoList;