import Home from "./pages/Home"
import "./App.css"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
const App = () => {
  const myvalue = useSelector(state=>state.boolean.boolean)
  const [selectedTheme, setSelectedTheme] = useState(`dark`)
  useEffect(()=>{
    
    localStorage.setItem("theme", myvalue?"dark":"light")
    console.log(myvalue)
    setSelectedTheme(localStorage.getItem("theme"))
  },[myvalue])
  return (
    <div className={selectedTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App