import Task from "../Task/Task";
import css from "./TaskList.module.css"
export default function TaskList() {
   
    const tasks = [
	    { id: 0, text: "Learn HTML and CSS", completed: true },
	    { id: 1, text: "Get good at JavaScript", completed: true },
	    { id: 2, text: "Master React", completed: false },
	    { id: 3, text: "Discover Redux", completed: false },
	    { id: 4, text: "Build amazing apps", completed: false },
	  ]

    return (
        <div>
            <ul className={css.list}>
                {tasks.map((task)=> (
                 <li className={css.listItem} key={task.id}>
                    <Task task={task}/>
                </li>   
                )
                )}
                
            </ul>
        </div>
    )
};
