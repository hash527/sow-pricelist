import './App.css'
import MainPage from './components/main-page'
import NavBar from './components/nav'
import Sidebar from './components/sidebar'

function App() {

  return (
    <section>
      <NavBar />
      <div className='main-content'>
        <Sidebar />
        <MainPage />
      </div>
    </section>
  )
}

export default App
