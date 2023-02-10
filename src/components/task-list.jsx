import Task from "./task"


export default function TaskList({ tasks, onTaskChanged }) {
    return <article>
        <aside>
            <nav>
                <ul>
                    {tasks.map(task => <Task key={task.id} task={task} onTaskChanged={onTaskChanged}/>)}
                </ul>
            </nav>
        </aside>
    </article>
}