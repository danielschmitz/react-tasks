import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react"
import service from '../service'

export default function NewTask() {

    const [task, setTask] = useState({
        title: '',
        done: false
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value })
    }

    const handleTaskAdd = (e) => {
        e.preventDefault()
        service.create(task).then(() => navigate('/'))
    }

    return <>
        <article>
            <header>New Task</header>
            <form>
                <input type="text"
                    value={task.title}
                    onChange={handleChange}
                    id="title"
                    name="title"
                    placeholder="Task"
                    required />
            </form>
            <footer>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <small><Link to='/'>Close</Link></small>
                    <a role="button" href="#" onClick={handleTaskAdd}>Add</a>
                </div>
            </footer>
        </article>
    </>
};
