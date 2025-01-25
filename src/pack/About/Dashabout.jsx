import { useEffect, useRef } from "react"
import "../../App.css"

const Dashabout = () => {
  const counter = useRef(null)
  useEffect(()=>{
    document.querySelectorAll(".counter").forEach(counter=>{
      const target =+counter.getAttribute('data-target');
      const duration = 2000
      const interval = 50

      let count = 0
      const increment = target /(duration/ interval)

      const updateCounter=()=>{
        count+=increment;
        if(count<target){
          counter.innerText = Math.floor(count)
          setTimeout(updateCounter, interval);
        }
        else{
          counter.innerText = target===100?`${target}%`:target
        }
      }
      updateCounter()
    })
  },[])
  return (
    <div className=" bg-[#0a2540] text-white my-16 font-[poppins] h-[100vh] py-32 px-[5%]">
      <div className="w-[400px]">
        <p className="text-[#00d4ff] font-bold my-3">Escala nacional</p>
        <h2 className="text-[30px] font-bold uppercase">The backbone for national commerce</h2>
        <p className=" text-[13px] text-[#9599b0] my-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus neque quam unde, modi esse! Quo voluptatum repellendus vel voluptas ratione quidem, dicta tempora consequatur rerum! Iste, suscipit consequatur. Asperiores!</p>
      </div>
      <div>
        <section className="grid grid-cols-4 gap-32 text-[40px] font-bold my-10">
          <div>
            <div className="counter border-l-[4px] px-2 my-1 border-[#149bb6]" id='counter' ref={counter} data-target="10000">0</div>
            <p className="text-[13px] font-light w-[200px]">Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
          </div>
          <div>
            <div className="counter border-l-[4px] px-2 my-1 border-[#149bb6]" id='counter' ref={counter} data-target="100">0</div>
            <p className="text-[13px]  font-light">Get the certificate</p>
          </div>
          <div>
            <div className="counter border-l-[4px] px-2 my-1 border-[#149bb6]" id='counter' ref={counter} data-target="1000">0</div>
            <p className="text-[13px]  font-light">Is already hired</p>
          </div>
          <div>
            <div className="counter border-l-[4px] px-2 my-1 border-[#149bb6]" id='counter' ref={counter} data-target="1000">0</div>
            <p className="text-[13px]  font-light">Is already hired</p>
          </div>
        </section>
      </div>

    </div>
  )
}

export default Dashabout