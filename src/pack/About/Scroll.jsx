import { BsLinkedin, BsTwitterX } from "react-icons/bs"
import { moregrid, team } from "../object/objects"

const Scroll = () => {
  return (
    <div className="px-[2%] text-center my-24">
      <h2 className="font-bold text-[30px] my-4">OUR TEAM</h2>
        <div className="grid grid-cols-4 gap-4 text-start">
      {
        team.map((item, index)=>{
          return(
            <div key={index}>
              <img className="rounded mb-2" src={item.id === 0?"product (1).jpeg":item.id === 1?"product (2).jpeg":item.id === 2?"product (3).jpeg":item.id === 3?"product (4).jpeg":""} alt="" />
              <p className="text-[15px] font-bold">{item.nome}</p>
              <p className="text-p text-[13px]">{item.role}</p>
              <div className="flex gap-4 text-p my-4">
                <BsLinkedin className="cursor-pointer"/>
                <BsTwitterX className="cursor-pointer"/>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>

  )
}

export default Scroll