import { FaArrowRight, FaTerminal } from "react-icons/fa"
import { infos, more, nav, popinfo } from "../object/object"
import { useState } from "react"
import { GrConnect } from "react-icons/gr"

const Nav = () => {
  const [showup, setShowUp] = useState(false)
  const [number, setNumber] = useState(0)
  const sendto=(nome)=>{
    if(nome === "Produtos"){
      setShowUp(true)
    }

  }
  const sendoff=()=>{

    setShowUp(false)

  }
  const mine = ()=>{
    setShowUp(false)
  }
  console.log(showup)
  return (
    <div className="px-[5%] py-4 text-white">
      <nav className="flex items-center justify-between ">
        <div className="flex items-center gap-8">
          <div className="text-[20px] font-bold">INEFOR</div>
          <ul className="flex items-center gap-4">
            {
              nav.map((item, index)=>{


                return(
                  <li key={index} onMouseEnter={()=>sendto(item.nome)} className="text-[15px] font-[popsemi] cursor-pointer">
                    {item.nome}
                  </li>
                )
              })
            }
            {
              showup&&
              <>
                <div onMouseEnter={()=>sendto} onMouseLeave={mine} className="absolute top-16 text-slate-800 shadow-2xl w-[50%] z-10 h-[auto] p-1 rounded flex justify-between bg-[#f6f9fb]">
                  <div className="flex justify-between basis-[72%] ">
                    <div className="grid gap-1 w-full">
                      {
                        popinfo.map((item, index)=>{
                          return(
                            <div key={index} className="bg-white p-3">
                              <h2 className="font-bold text-[17px]">{item.nome}</h2>
                              <div className="flex jusitfy-between gap-9">
                                <div>
                   
                                  <ul className="">
                                    <div className="flex items-center gap-1">
                                      <GrConnect/>
                                      <div className="my-1">
                                        <h4 className="font-bold">Payments</h4>
                                        <p className="text-[#77797b] text-[13px]">Online Payments</p>
                                      </div>
      
                                    </div>
                                    
                                    {
                                      item.sub.map((item, index)=>{
                                        return(
                                          <li key={index} className="flex items-center gap-1 ml-5 font-bold text-[13px] bg-[#f6f9fc] my-1 px-2 rounded w-[150px] cursor-pointer">{item}</li>
                                        )
                                      })
                                    }
                                  </ul>
                                </div>  
                                <div>
                                  {
                                    infos.map((item, index)=>{
                                      return(
                                        <div key={index} className="flex items-center gap-1 cursor-pointer">
                                          <div className="bg-[#f6f9fc] rounded p-1">
                                            <FaTerminal/>
                                          </div>
                                          
                                          <div>
                                            <h5 className="text-[13px] font-bold">{item.nome}</h5>
                                            <p className="text-[13px]">{item.info}</p>
                                          </div>
                                        </div>
                                      )
                                    })
                                  }
                                </div>
                              </div>
                            </div>

                          )
                        })
                      }
                    </div>
                  </div>
                  
                    <div className="p-3">
                      <h2 className="font-bold">MORE</h2>
                      {
                        more.map((item, index)=>{
                          return(
                            <div key={index} className="text-[14px] font-bold my-2 cursor-pointer">
                              {item.nome}
                            </div>
                          )
                        })
                      }
                    </div>
                </div>
              </>

            }
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 font-bold text-[13px] py-2 px-4"><span>Login</span>{<FaArrowRight size={10}/>}</button>
          <button className="flex items-center gap-1 font-bold text-[13px] py-1.5 px-4 bg-white text-[#d3308d] rounded-[15px]"><span> Sign in</span> {<FaArrowRight size={10}/>}</button>
        </div>
      </nav>
    </div>
  )
}

export default Nav