import css from './App.module.css'
import TaskList from '../TaskList/TaskList'
import Logo from '../Logo/logo'
export default function App() {
  
  return (
    <>
      <main className={css.layout}>
  Planer
      <Logo/>
      <TaskList/>
         
      </main>
      </>
  )
};
