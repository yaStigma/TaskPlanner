import css from './App.module.css'
import Logo from '../components/Logo/Logo'
import Navigation from '../components/Navigation/Navigation'
export default function App() {
  
  return (
    <>
      <main className={css.layout}>
      <Logo/>
      <Navigation/>
         
      </main>
      </>
  )
};
