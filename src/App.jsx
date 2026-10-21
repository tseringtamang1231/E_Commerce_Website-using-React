import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Input from './components/Input'
import Footer from './components/Footer/Footer'
import {Container} from "./components"
import Login from './components/Login'
import Signup from './components/Signup'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Container>
     <Navbar />
     <Outlet />
     <Footer />
     </Container>
    </>
  )
}

export default App
