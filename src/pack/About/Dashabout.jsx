import { useEffect, useRef } from "react"


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
    <div className="px-[2%] text-center my-16">
      <div>
        <p className=" font-bold">INEFOR</p>
        <h2 className="text-[40px] font-bold uppercase text-text">We have the base for show you the way</h2>
        <p className="text-p text-[14px] px-32">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus neque quam unde, modi esse! Quo voluptatum repellendus vel voluptas ratione quidem, dicta tempora consequatur rerum! Iste, suscipit consequatur. Asperiores!</p>
      </div>
      <div>
        <section className=" justify-between px-[20%] text-[50px] font-bold flex items-center my-10 text-myColor rounded-sm p-2">
          <div>
            <div className="counter px-4" id='counter' ref={counter} data-target="10000">0</div>
            <p className="text-[13px] text-p font-light">Students per year</p>
          </div>
          <div>
            <div className="counter px-4" id='counter' ref={counter} data-target="100">0</div>
            <p className="text-[13px] text-p font-light">Get the certificate</p>
          </div>
          <div>
            <div className="counter px-4" id='counter' ref={counter} data-target="1000">0</div>
            <p className="text-[13px] text-p font-light">Is already hired</p>
          </div>
        </section>
      </div>

    </div>
  )
}

export default Dashabout