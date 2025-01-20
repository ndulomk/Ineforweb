import { BsArrowRight } from "react-icons/bs"
import { more } from "../object/objects"

const Some = () => {
  return (
    <div className="grid grid-cols-4 mt-8 px-[2%] gap-4">
      {
        more.map((item, index)=>{

          return(
            <div key={index} className="flex flex-col gap-y-1">
              <h2 className="font-bold text-[15px]">{item.nome}</h2>
              <p className="text-p text-sm">{item.info}</p>
              <button className="flex items-center gap-2 text-sm font-bold text-myColor"><span className="text-[12px]">Read more</span> <BsArrowRight/></button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Some