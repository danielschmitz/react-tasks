import { useParams } from "react-router-dom"
import App from "./App"
import config from "./config"
import EditTask, { loader as EditTaskLoader } from "./pages/edit-task"
import HelloWorld from "./pages/hello-world"
import ListTask, { loader as ListTasksLoader} from "./pages/list-task"
import NewTask, {action as NewTaskAction} from "./pages/new-task"

export default [
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                loader: ListTasksLoader,
                element: <ListTask />
            },
            {
                path: "/hello-world",
                element: <HelloWorld />
            },
            {
                path: "/new-task",
                element: <NewTask />,
                action: NewTaskAction
            },
            {
                path: "/edit-task/:id",
                loader: EditTaskLoader,
                element: <EditTask />
            }
        ]
    },
]