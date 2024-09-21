import css from './SearchForm.module.css'


export default function SearchForm() {
    return(
<div>
<input type="text" placeholder="Search Task" className={css.input} />
</div>
    )
};
