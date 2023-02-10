import React from "react"

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
        <br />
    </li>)

};