import css from './App.module.css'
import TaskList from '../TaskList/TaskList'
export default function App() {
  
  return (
    <>
      <main className={css.layout}>
  Planer
      <TaskList/>
         
      </main>
      </>
  )
};
