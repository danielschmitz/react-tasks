import { Form, Link, redirect, useNavigate } from 'react-router-dom'
import { useState } from "react"
import service from '../service'

export async function action({ request, params }) {
    console.log({ request, params })
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await service.create(updates)
    return redirect(`/`)
}

export default function NewTask() {

    const [task, setTask] = useState({
        title: '',
        done: false
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value })
    }

    // const handleTaskAdd = (e) => {
    //     e.preventDefault()
    //     service.create(task).then(() => navigate('/'))
    // }

    return <>
        <Form method="post" id="task-form">
            <article>
                <header>New Task</header>

                <input type="text"
                    value={task.title}
                    onChange={handleChange}
                    id="title"
                    name="title"
                    placeholder="Task"
                    required />

                <footer>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <small><Link to='/'>Return</Link></small>
                        {/* <a role="button" href="#" onClick={handleTaskAdd}>Add</a> */}
                        <button type="submit">Save</button>
                    </div>
                </footer>

            </article>
        </Form>
    </>
};
