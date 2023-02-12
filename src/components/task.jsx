import React from "react"
import { Link } from "react-router-dom";

export default function Task({ task, onTaskChanged, onTaskDelete }) {

    const [checked, setChecked] = React.useState(task.done);

    const handleChange = (e) => {
        setChecked(e.target.checked);
        task.done = e.target.checked;
        onTaskChanged(task)
    }

    const handleDelete = (e) => {
        e.preventDefault()
        if (window.confirm(`Delete ${task.title}?`)) {
            onTaskDelete(task.id)
        }
    }

    return (<li>
        <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center' }}>
            <span>
                <input type="checkbox" onChange={handleChange} checked={checked}></input>
                {task.title}
                </span>            
            <span style={{ display: 'flex', justifyContent: 'end', gap: 10 }}>
                <Link to={`/edit-task/${task.id}`} >Edit</Link>
                <a href="#" onClick={handleDelete}>Delete</a>
            </span>
        </div>
    </li>)

};