import { MdDone } from "react-icons/md"
import { prod } from "../object/prod"

const Pricing = () => {
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
    <div className="grid grid-cols-3 px-[2%] gap-4 my-16">
      {
        prod.map((item, index)=>{

          return(
            <div key={index} className={item.id === 1?"border-border border p-4 scale-[1.1]  bg-background rounded-2xl shadow-md shadow-[#00000024]":"border-border border p-4 rounded-2xl bg-background"}>
              {item.id === 1?<div className="flex justify-between items-center text-myColor">
                <h1 className="font-bold text-[20px]">{item.nome}</h1>
                <span className="px-2 py-1 bg-[#edecfc] rounded-3xl text-[12px] font-bold">Most popular</span>
              </div>:<h1 className="font-bold text-[20px]">{item.nome}</h1>}
              <p className="text-p text-[13px] my-2">{item.info}</p>
              <div className="">
                <span className="text-[25px] font-bold">{setCurrency(item.price)}</span>
                <span className="text-p text-[13px] font-semibold">/month</span>
              </div>
              <div>
                {item.sub.map((item, index)=>{
                  return(
                    <div key={index} className="flex items-center gap-2 my-2">
                      <MdDone className="text-myColor"/>
                      <span className="text-p text-[13px]">{item}</span>
                    </div>
                  )
                })}
              </div>
              {item.id === 1?<button className="p-1 rounded bg-myColor w-full text-textbtn font-bold text-[13px] my-4 hover:scale-[1.1] transition-all">Buy plan</button>:<button className="p-1 rounded w-full border-myColor border-[2px] text-myColor font-bold text-[13px] my-4 hover:bg-myColor hover:text-text transition-all">Buy Plan</button>}
            </div>
          )
        })
      }
    </div>
  )
}

export default Pricing