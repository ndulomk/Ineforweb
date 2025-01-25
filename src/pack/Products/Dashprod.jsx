import { useEffect, useRef } from "react"

const Dashprod = () => {
  const mine = useRef(null)
  useEffect(()=>{
    const boxes = document.querySelectorAll(".box")
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          entry.target.classList.add("animate-left")
        }
      })
    },
  {threshold:0.5}
  )
  boxes.forEach((box)=>observer.observe(box))
  // observer.observe(boxes);
  }, [])
  return (
    <div className="text-center" >
      <p className="mt-8 font-bold text-[14px] ">Products</p>
      <h2 className="font-bold text-[35px] my-2 text-myColor box" ref={mine}>WE'RE CHANGING THE WAY PEOPLE LEARN</h2>
      <p className="px-64 text-[14px] text-p box" ref={mine}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolorem laborum nihil, consequatur quae quis repudiandae eius ut</p>
      <button className=" my-2 py-1 px-4 rounded-[20px] bg-btn text-textbtn font-bold text-[14px]  hover:scale-[1.2] transition-[0.5s] gap-2">Contact us</button>
    </div>
  )
}

export default Dashprod