import './App.css'
import AllEvents from './pages/home'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Header from './components/Header.jsx'
import { useState } from 'react'
import Footer from './components/Footer.jsx'


function App() {
  const [rqdEvents, setRqdEvents] = useState([])
  return (
    <div className="bg-body-tertiary">
      <Header setRqdEvents={setRqdEvents}/>
      <div className="container">
      <hr />  
      <AllEvents rqdEvents={rqdEvents}/>
      </div> 
      <Footer/>  
    </div>
  )
}

export default App
