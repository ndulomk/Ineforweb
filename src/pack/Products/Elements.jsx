import { MdDone } from "react-icons/md"
import { moreOne } from "../object/objects"
import { useNavigate } from "react-router-dom"

const Elements = ({setState}) => {
  const navigate = useNavigate()
  const setCurrency = (amount)=>{
    if(String(amount).includes(",")){
      amount = Number(amount.replace(",","."))
    }
    const pamount = amount
    const numberOfDecimals = 2
    const formattedValue = pamount.toLocaleString('pt', {
      style:"currency",
      currency:"AOA",
      minimumFractionDigits: numberOfDecimals,
      maximumFractionDigits: numberOfDecimals
    })
    
    return formattedValue
  }
  
  return (
    <div className="grid grid-cols-3 px-[2%] gap-8 my-20">
      {
        moreOne.map((item, index)=>{
          const sendto=(nome)=>{
            if(nome === "Frontend"){
              setState(nome)
            }
          }

          return(
            <div key={index} className="border-border border-[1px] rounded-xl p-4 shadow-lg shadow-[#00000028]">
              <h3 className="font-bold my-3">{item.nome}</h3>
              <p className="text-[13px] text-p my-2">{item.info}</p>
              <div>
                <span className="font-bold text-[20px]">{setCurrency(item.price)}</span>
                <span className="text-p text-[13px] font-bold">/month</span>
              </div>
              <button onClick={()=>sendto(item.nome)} className="p-1 bg-myColor rounded w-full text-textbtn font-bold text-[14px] my-2 hover:scale-[1.1] transition-all" data={item.nome}>Buy Plan</button>
              <ul>
                <li className='text-p flex items-center gap-1 text-pwhite text-[13px]'><MdDone color="#4f46e5"/>Pratices</li>
                <li className='text-p flex items-center gap-1 text-pwhite text-[13px]'><MdDone color="#4f46e5"/>Degree</li>
                <li className='text-p flex items-center gap-1 text-pwhite text-[13px]'><MdDone color="#4f46e5"/>Knowledge</li>
              </ul>
            </div>
          )
        })
      }
    </div>
  )
}

export default Elements