import css from './TaskCounter.module.css'

export default function TaskCounter() {
    const  allTask = 0;
    const priopityTask = 0;
    const complitedTask = 0;
    const upcomingTask = 0;
    const overdueTask = 0;
    return (
        <div className={css.section}> 
 <h2 className={css.title}>My Task</h2>
<div className={css.container}>
    <div className={`${css.box} ${css.priority}`}>
    <img src="../../public/priority.svg" alt="priority" />
    <p className={css.text}>Priority today Task</p>
    <p className={css.tasks}>{priopityTask}/{allTask} Task</p>
    </div>

    <div className={`${css.box} ${css.upcoming}`}>
    <img src="../../public/upcoming.svg" alt="upcoming" />
    <p className={css.text}>Upcoming Task</p>
    <p className={css.tasks}>{upcomingTask}/{allTask} Task</p>
    </div>

    <div className={`${css.box} ${css.overdue}`}>
    <img src="../../public/overdue.svg" alt="overdue" />
    <p className={css.text}>Overdue Task</p>
    <p className={css.tasks}>{overdueTask}/{allTask} Task</p>
    </div>

    <div className={`${css.box} ${css.complited}`}> 
    <img src="../../public/complited.svg" alt="complited" />
    <p className={css.text}>Complited Task</p>
    <p className={css.tasks}>{complitedTask}/{allTask} Task</p>
    </div>
</div>      
        </div>
    )
};
