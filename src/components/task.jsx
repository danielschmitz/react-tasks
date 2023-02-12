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
        <input type="checkbox" onChange={handleChange} checked={checked}></input>
        {task.title}
        <Link style={{float:"right"}} to={`/edit-task/${task.id}`} >Edit</Link>
        <br />
    </li>)

};