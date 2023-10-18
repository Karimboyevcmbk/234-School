import "./App.css"
import Footer from "./components/footer/Footer"
import Nav from "./components/nav/Nav"
import Home from "./routes/Home"
import { Route,Routes } from "react-router-dom"
import Teachers from "./routes/Teachers/teachers"
import Ariza from "./routes/Ariza/Ariza"
import Yangiliklar from "./routes/Yangiliklar/Yangiliklar"
import ToliqMalumot from "./routes/toliqMalumot/ToliqMalumot"

function App() {

  return (
    <div className='container'>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/teachers" element={<Teachers/>}/>
        <Route path="/ariza" element={<Ariza/>}/>
        <Route path="/news" element={<Yangiliklar/>}/>
        <Route path="/toliq" element={ToliqMalumot}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
