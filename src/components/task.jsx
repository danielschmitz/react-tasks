import React from "react"
import { Link } from "react-router-dom";

export default function Task({ task, onTaskChanged }) {

    const [checked, setChecked] = React.useState(task.done);

    const handleChange = (e) => {
        setChecked(e.target.checked);
        task.done = e.target.checked;
        onTaskChanged(task)
    }

    return (<li>
        <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center' }}>
            <span>
                <input type="checkbox" onChange={handleChange} checked={checked}></input>
                {task.title}
                </span>            
            <span style={{ display: 'flex', justifyContent: 'end', gap: 10 }}>
                <Link to={`/edit-task/${task.id}`} >Edit</Link>
                <Link to={`/edit-task/${task.id}`} >Delete</Link>
            </span>
        </div>
    </li>)

};