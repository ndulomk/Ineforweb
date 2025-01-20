import { BsArrowRight } from "react-icons/bs"

const Hero = () => {
  return (
    <div className="px-[2%] my-16">
      <h1 className="text-[40px] font-bold uppercase">Getting Started with Inefor</h1>
      <p className="text-p text-sm w-[900px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi amet maiores iusto delectus quas illo iste. Consequatur quae vitae laborum vero, dolor voluptatum vel, eaque tempora mollitia voluptatem, soluta ullam?</p>
      <div className="flex items-center gap-2 mt-4">
        <button className="flex items-center py-1 px-4 rounded-[20px] bg-btn text-textbtn font-bold text-[14px] hover:bg-btn hover:scale-[1.1] hover:text-white transition-[0.5s] gap-2">Quickstart <BsArrowRight/></button>
        <button className="py-1 px-8 rounded-[15px] bg-transparent border-border border-[2px] text-p font-bold text-[14px] hover:bg-cyan-600 hover:text-white transition-[0.5s]">Explore</button>
      </div>
      <div className="mt-8">
        <h2 className="text-[30px] font-bold">SOME STEPS</h2>
        <div className="text-p text-sm w-[900px]">Lorem ipsum dolor sit amet <span className="text-myColor">consectetur</span>, adipisicing elit. Recusandae, dicta iste rem temporibus repellendus illum asperiores cupiditate atque quae qui provident voluptas ipsa reiciendis excepturi ratione sit quisquam <span className="text-myColor">voluptate</span> velit?
        Lorem ipsum dolor sit amet <span className="text-myColor">consectetur</span>, adipisicing elit. Recusandae, dicta iste rem temporibus repellendus illum asperiores cupiditate atque quae qui provident voluptas ipsa reiciendis excepturi ratione sit quisquam <span className="text-myColor">voluptate</span> velit?
       
        </div>
        <div className="mt-4">
          <button className="text-myColor flex items-center gap-2 font-semibold text-sm"><span>Get your API key</span> <BsArrowRight/></button>
        </div>
      </div>
    </div>
  )
}

export default Hero