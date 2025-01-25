import Count from "../components/Dashbody/Count"
import Dash from "../components/Dashbody/Dash"
import Hero from "../components/Dashbody/Hero"
import Nav from "../components/header/Nav"
import Dashabout from "../pack/About/Dashabout"
import Blog from "../pack/blog/Blog"
import SomeGrid from "../pack/Dash/SomeGrid"
import Products from "../pack/Products"



const Home = () => {
  return (
    <div className="">
      <div className="bg-hero bg-cover ">
        <Nav/>
        <Hero/>
      </div>
    
      <div className="px-[5%]">
        <Dash/>
        <SomeGrid/>
        <Products/>
        <Blog/>
      </div>
      <Dashabout/>
  
    </div>
  )
}

export default Home