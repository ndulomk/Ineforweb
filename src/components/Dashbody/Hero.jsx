import { FaArrowRight } from "react-icons/fa"

const Hero = () => {
  return (
    <div className="flex justify-between my-8 pl-[5%] h-[100vh] text-white">
      <div >
        <div className="bg-[#64657f81] flex items-center w-[340px] rounded-[15px] py-1 px-2 text-white font-bold my-4">
          <button className="flex items-center">Session 2025 New features with Kudika <FaArrowRight size={12} className="ml-1"/></button>
        </div>
        <div>
          <h1 className="text-[50px] font-bold font-[popbold] w-[400px]">Be capable in 2025 with our curses and see your dreams come true</h1>
   
          <p className="w-[500px] text-[14px] mb-4 text-[rgb(234,234,241)]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio illum eius aperiam rem ab fuga, vel laudantium eum. Incidunt cum maxime hic. Ullam error mollitia voluptate illo ducimus vitae praesentium.</p>
          <div className="rounded-[15px] border-[gray] flex items-center gap-1 bg-[#babbfb59] justify-between pl-4 pr-1 py-1 w-[70%] text-[13px] shadow-xl">
            <input type="email" name="email" id="email" className="bg-transparent py-1 px-2" placeholder="Email Address"/>
            <button className="flex items-center gap-1 bg-[#0a2540] text-[white] font-bold px-2 py-1 rounded-[15px] active:scale-[1.2]"><span>Start now</span><FaArrowRight size={10}/></button>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Hero