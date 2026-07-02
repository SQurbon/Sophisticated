import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HomeRoutes from './routes/HomepageRoutes/HomeRoutes'
import CoursesPage from './pages/CoursesPage/CoursesPage'
import Footer from './components/Footer'
import RegisterPage from './pages/RegisterPage/RegisterPage'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomeRoutes/>}/>
      <Route path='/courses' element={<CoursesPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
