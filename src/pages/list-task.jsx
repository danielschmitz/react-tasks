import { Form, useLoaderData, useLocation, useNavigate } from "react-router-dom"
import service from "../service"
import TaskList from "../components/task-list"
import { useEffect, useState } from "react"

export async function loader({ request }) {
    const url = new URL(request.url)
    const q = url.searchParams.get("q")
    return service.getAll(q)
}

export default function ListTask() {

    //const [tasks, setTasks] = useState([])

    const tasks = useLoaderData()

    const handleTaskChanged = async task => {
        await service.update(task)
    }

    const navigate = useNavigate()
    const handleTaskDelete = async id => {
        await service.delete(id).then(() => navigate('/'))
    }

    // const location = useLocation() // hack to reload data every time the page is re-rendered
    // useEffect(() => {
    //     service
    //         .getAll()
    //         .then(response => response.json())
    //         .then(data => setTasks(data))
    // }, [location.key])

    const search = <Form id="search-form" role="search">
        <input
            id="q"
            aria-label="Search contacts"
            placeholder="Search"
            type="search"
            name="q"
        />
        <div id="search-spinner" aria-hidden hidden={true} />
        <div className="sr-only" aria-live="polite"></div>
    </Form>

    return <>
        {search} <TaskList tasks={tasks} onTaskChanged={handleTaskChanged} onTaskDelete={handleTaskDelete} />
    </>
};
