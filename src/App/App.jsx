import { Routes, Route } from 'react-router-dom'
import css from './App.module.css'
import Logo from '../components/Logo/Logo'
import Navigation from '../components/Navigation/Navigation'
import Home from '../pages/Home/Home'
import Task from '../pages/Task/Task'
import Contact from '../pages/Contact/Contact'
import Calendar from '../pages/Calendar/Calendar'
import Account from '../pages/Account/Account'
import Setting from '../pages/Setting/Setting'
import NotFound from '../pages/NotFound/NotFound'

export default function App() {
  
  return (
    <>
      <main className={css.layout}>
      <div className={css.sidebar}>
      <Logo/>
      <Navigation/>
      </div>
      <div className={css.content}>
      <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/task' element={<Task/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/calendar' element={<Calendar/>}/>
<Route path='/account' element={<Account/>}/>
<Route path='/setting' element={<Setting/>}/>
<Route path="*" element={<NotFound />} />
      </Routes>
 </div>
      </main>
      </>
  )
};
