import { Button } from "../Button/Button"
import css from './Navigation.module.css' ;


export default function Navigation() {
   return(   
<div className={css.container}>

    <div >
    <p className={css.text}>Menu</p>
    <ul className={css.menu}>
        <li><Button> <img src="../../public/home.svg" alt="home" /> Номе </Button></li>
    <li><Button> <img src="../../public/board.svg" alt="taskboard" /> Task </Button></li>

<li><Button> <img src="../../public/contacts.svg" alt="contact" /> Contact </Button></li>

<li><Button> <img src="../../public/calendar.svg" alt="calendar" /> Calendar </Button></li>
    </ul>


   </div> 

    <div>
    <p className={css.text}>Account</p> 
    <ul className={css.account}>
    <li>
    <Button> <img src="../../public/account.svg" alt="account" /> Account </Button>
    </li>
        <li>
        <Button> <img src="../../public/setting.svg" alt="setting" /> Setting </Button>
        </li>
    </ul>
    </div>
   
   
   
   </div>
    

) 

};

