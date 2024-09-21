import css from './ArticleBar.module.css'

export default function ArticleBar() {
    return(
        <div className={css.container}>
        <h2>
            Article Bar
        </h2>
        <ul>
            <li>Article 1 </li>
            <li>Article 2 </li>
            <li>Article 3 </li>
        </ul>
    </div>
    )
};
