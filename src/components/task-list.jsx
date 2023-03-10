import Task from "./task"

export default function TaskList({ tasks, onTaskChanged, onTaskDelete }) {
    return <article>
        <aside>
            <nav>
                <ul>
                    {tasks.map(task => <Task key={task.id} task={task} onTaskChanged={onTaskChanged} onTaskDelete={onTaskDelete}/>)}
                </ul>
            </nav>
        </aside>
    </article>
}