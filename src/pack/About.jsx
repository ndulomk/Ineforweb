import Dashabout from "./About/Dashabout"
import Scroll from "./About/Scroll"
import Blog from "./blog/Blog"
import Navbar from "./Dash/Navbar"

const About = () => {
  return (
    <div className=" rounded bg-background shadow-sm shadow-[#00000031]">
      <Navbar/>
      <Dashabout/>
      <Scroll/>
      <Blog/>
    </div>
  )
}

export default About