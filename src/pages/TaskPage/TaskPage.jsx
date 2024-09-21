import StatusFilter from '../../components/StatusFilter/StatusFilter';
import  Tasklist  from '../../components/TaskList/TaskList';
import css from './TaskPage.module.css'
export default function TaskPage() {
    return(
       <div className={css.container}>
        <div className={css.box}>
        <h2 className={css.title}>Task Board</h2>
        <StatusFilter/>
        </div>
        <Tasklist/>
       </div>
    )
};
