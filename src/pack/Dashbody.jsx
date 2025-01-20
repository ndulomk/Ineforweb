import { useSelector } from "react-redux"
import Hero from "./Dash/Hero"
import Navbar from "./Dash/Navbar"
import Some from "./Dash/Some"
import SomeGrid from "./Dash/SomeGrid"
import Elements from "./Products/Elements"
import Blog from "./blog/Blog"

const Dashbody = () => {
  const myvalue = useSelector(state=>state.boolean.boolean)
  return (
    <div className={myvalue?"rounded-lg pb-4 shadow-sm shadow-[#00000033] bg-background":"rounded-lg pb-4 shadow-sm shadow-[#5459805f] bg-background"}>
      <div >
        <Navbar/>
      
      </div>
      <div className="">
        <Hero/>
        <Some/>
        <SomeGrid/>
        <Elements/>
        <Blog/>
      </div>
    
    </div>
  )
}

export default Dashbody