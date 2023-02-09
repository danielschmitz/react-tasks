import { Link } from 'react-router-dom'

export default function NewTask(params) {
    return <>
        <article>
            <header>New Task</header>
            ....formulario....
            <footer>
                <small><Link to='/'>Close</Link></small>
            </footer>
        </article>
    </>
};
