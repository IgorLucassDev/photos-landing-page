import './App.css'

import Home from './views/home/Home'
import Services from './views/services/Services'
import Contact from './views/contact/Contact'

import Navbar from './components/layout/navbar/Navbar'
import Footer from './components/layout/footer/Footer'


function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
