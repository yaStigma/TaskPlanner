import { Button } from '../Button/Button'
import css from './StatusFilter.module.css'


export default function StatusFilter() {
    return(
        <div className={css.container}>
            <Button>All</Button>
            <Button>Active</Button>
            <Button>Priority</Button>
            <Button>Overdue</Button>
            <Button>Complited</Button>
        </div>
    )
};
