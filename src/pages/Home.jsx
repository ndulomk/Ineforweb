import Dash from "../components/Dashbody/Dash"
import Hero from "../components/Dashbody/Hero"
import Nav from "../components/header/Nav"



const Home = () => {
  return (
    <div className="">
      <div className="bg-hero bg-cover">
        <Nav/>
        <Hero/>
      </div>
      <Dash/>
      
    </div>
  )
}

export default Home