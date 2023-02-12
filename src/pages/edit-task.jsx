import { Link, useLoaderData, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import service from '../service'

export function EditTaskLoader({params}) {
    return service.getTask(params.id)
}

export default function EditTask() {

    // const [task, setTask] = useState({
    //     id:0,title:'',done:false
    // })
    const task = useLoaderData();

    const  { id } = useParams();

    // const location = useLocation() 
    // useEffect(() => {
    //     service
    //         .getTask(id)
    //         .then(response => response.json())
    //         .then(data => setTask(data))
    // }, [location.key])

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value })
    }

    const navigate = useNavigate();
    const handleTaskEdit = (e) => {
        e.preventDefault()
        service.update(task).then(() => navigate('/'))
    }

    return <>
        <article>
            <header>Edit Task</header>
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
                    <small><Link to='/'>Return</Link></small>
                    <a role="button" href="#" onClick={handleTaskEdit}>Save</a>
                </div>
            </footer>
        </article>
    </>
};
