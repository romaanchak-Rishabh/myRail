import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/layout/header/Header'
import Footer from './components/layout/footer/Footer'

function App() {
  return (
    <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default App;