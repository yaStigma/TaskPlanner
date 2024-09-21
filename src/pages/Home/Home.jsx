import css from './Home.module.css'
import ArticleBar from "../../components/ArticleBar/ArticleBar";
import TaskCounter from "../../components/TaskCounter/TaskCounter";

export default function Home() {
    return(
<div className={css.container}>
    <TaskCounter/>
    <ArticleBar/>
</div>
    )
};
