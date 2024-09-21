import { Button } from "../Button/Button";
import SearchForm from "../SearchForm/SearchForm";
import css from './AppBar.module.css'



export default function AppBar() {
    return (
        <header className={css.container}>
            <SearchForm/>
            <Button  className={css.btnCreate}>
            <img src="../../public/star.svg" alt="star" />
                Create New Task</Button>
                <Button  className={css.btnNotif}>
            <img src="../../public/notification.svg" alt="notification" />
                </Button>
                <Button  className={css.btnNotif}>
            <img src="../../public/account.svg" alt="account" />
                </Button>
        </header>
    )
};
