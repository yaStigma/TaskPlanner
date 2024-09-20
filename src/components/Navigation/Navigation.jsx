import { Button } from "../Button/Button"
import css from './Navigation.module.css' ;
import { NavLink, useLocation} from "react-router-dom";

export default function Navigation() {
    const { pathname } = useLocation();
   return(   
<div className={css.container}>
<p className={css.text}>Menu</p>
<nav className={css.menu}>
    <NavLink to='/'>
    <Button selected = {pathname =='/' ? true : false }> 
    <img src="../../public/home.svg" alt="home" /> 
    Номе 
    </Button>
    </NavLink>
    <NavLink to='/task'>
    <Button selected = {pathname =='/task' ? true : false }>
     <img src="../../public/board.svg" alt="taskboard" /> 
     Task 
     </Button>
    </NavLink>
    <NavLink to='/contact'>
    <Button selected = {pathname =='/contact' ? true : false }> 
    <img src="../../public/contacts.svg" alt="contact" /> 
    Contact 
    </Button>
    </NavLink>
    <NavLink to='/calendar'>
    <Button selected = {pathname =='/calendar' ? true : false }> 
    <img src="../../public/calendar.svg" alt="calendar" /> 
    Calendar 
    </Button>
    </NavLink>
</nav>
    <p className={css.text}>Account</p> 
<nav className={css.account}>
    <NavLink to='/account'>
    <Button selected = {pathname =='/account' ? true : false }> 
    <img src="../../public/account.svg" alt="account" /> 
    Account 
    </Button>
    </NavLink>
    <NavLink to='/setting'>
    <Button selected = {pathname =='/setting' ? true : false }>
     <img src="../../public/setting.svg" alt="setting" /> 
     Setting 
     </Button>
     </NavLink>
   </nav>
</div>
    

) 

};

