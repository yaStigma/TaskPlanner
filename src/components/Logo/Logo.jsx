import css from './Logo.module.css' ;

export default function Logo() {
    return (
        <div className={css.container}>
             <img className={css.img} src="../../public/tasklogo.svg" alt="logo" />

<h1 className={css.text}>
    <span className={css.aksent}>Task</span>board</h1>
       </div>
    )
};
