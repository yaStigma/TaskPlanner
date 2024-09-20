import css from './Task.module.css'
import { MdClose } from 'react-icons/md';
export default function Task({task}) {
    return (
        <div className={css.container}>
            <input type="checkbox" checked={task.completed} className={css.checkbox} />
            <p className={css.task}>{task.text}</p>
            <button className={css.close}><MdClose size={24} /></button>
        </div>
    )
};
