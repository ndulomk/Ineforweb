import { useState } from "react"
import { guides } from "../object/objects"

const SideItems = ({setState}) => {
  const [show, setShow] = useState(false)
  const [myid, setMyId] = useState(0)
  return (
    <div className="space-y-1">
            {
              guides.map((item, index)=>{
                const showdown =(id, nome)=>{
                  setShow(!show)
                  setMyId(id)
                  setState(nome)
                }
                return(
                  <ul key={index} className="font-semibold text-[15px]">
                    {<li onClick={()=>showdown(item.id, item.nome)} className={myid === item.id?"cursor-pointer py-1 text-black bg-[#fff]  flex items-center gap-1 rounded px-2 shadow-md font-[400] mb-2":"cursor-pointer py-1 flex items-center gap-1 px-2 text-[gray] font-[400] mb-2"}>
                        <span className={myid === item.id?"border-l-[3px] border-myColor px-3 py-0.5":"px-3 text-p"}>
                          {item.nome}
                        </span> {item.id === myid&&<div></div>}</li>}</ul>
                )
              })
            }
          </div>
  )
}

export default SideItems