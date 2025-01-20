import { BiChat, BiGroup, BiMailSend, BiUserCircle } from "react-icons/bi"
import { moregrid } from "../object/objects"
import { useSelector } from "react-redux"

const SomeGrid = () => {
  const myvalue = useSelector(state=>state.boolean.boolean)
  return (
    <div className="my-16">
      <div className="px-[2%]">
        <div className="border-b-[2px] border-border mb-8 pb-4">
          <h2 className="text-[25px] font-bold">Resources</h2>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 px-[2%] mb-8">
        {
          moregrid.map((item, index)=>{

            return(
              <div key={index} className="border-bordercard border-[1px] rounded-xl bg-bgcard px-[4%] pt-12 pb-8 hover:scale-[1.1] transition-all shadow-lg shadow-[#00000028]">
                <div className="bg-bgcard border-[2px] border-bordercard w-[35px] text-[25px] p-1 rounded-[25px] mb-5 ">
                  {item.id === 0?<><BiUserCircle/></>:item.id === 1?<><BiChat/></>:item.id === 2?<><BiMailSend/></>:<><BiGroup/></>}
                </div>
                <h2 className="font-bold text-[14px] mb-2">{item.nome}</h2>
                <p className="text-p text-[13px]">{item.info}</p>
              </div>
            )
          })
        }
      </div>
    </div>
    
  )
}

export default SomeGrid