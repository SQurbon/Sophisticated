import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HomeRoutes from './routes/HomepageRoutes/HomeRoutes'
import CoursesPage from './pages/CoursesPage/CoursesPage'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomeRoutes/>}/>
      <Route path='/courses' element={<CoursesPage/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
