import { MdDone } from "react-icons/md"
import { prod } from "../object/prod"

const Item = () => {
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
    <div className="px-[2%]">
          <div className="text-center my-16">
            <h1 className="font-bold text-[30px] uppercase">Simple no-tricks Pricing</h1>
            <p className="text-p text-[13px] px-32">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam reiciendis ratione quibusdam, corporis voluptatum earum culpa aliquid perspiciatis. Nihil, sint? Cum voluptatibus vel magnam totam sunt accusantium id ex. Laudantium.</p>
          </div>
      <div className="border-border border-[2px] rounded-md p-6 flex">
        <div>
  
          <div>
            <div>
              <h3 className="text-[20px] font-bold uppercase">Lifetime Skill</h3>
              <p className="text-[13px] text-p my-2 pr-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi sint minima tempore. Ut debitis</p>
              <div>
                <h4 className="text-myColor font-bold my-4">What's Included</h4>
                <div className="flex justify-between items-center pr-[30%]">
                  <div>
                  {
                    prod.map((item)=>{
                      if(item.id === 0){
                        return item.sub.map((item, index)=>{
                          return(
                            <div key={index} className="flex items-center gap-1 my-4"><><MdDone className="text-myColor"/><span className="text-p text-[13px]">{item}</span></></div>
                          )
                        })
                      }

                    })
                  }
                  
                  </div>
                  <div>
                  {
                    prod.map((item)=>{
                      if(item.id === 1){
                        return item.sub.map((item, index)=>{
                          return(
                            <div key={index} className="flex items-center gap-1 my-4"><><MdDone className="text-myColor"/><span className="text-p text-[13px]">{item}</span></></div>
                          )
                        })
                      }

                    })
                  }
                  </div>
                </div>
              </div>
            </div>
          </div>
       
        </div>
        <div className="bg-sidebar rounded shadow-lg border-border shadow-[#0000002d] text-center px-10 basis-[40%]">
          <p className="text-p font-bold py-4">Pay Once, own the skill forever</p>
          <div>
            <span className="text-[30px] font-bold">{setCurrency(100000)}</span>
            <span className="font-bold text-p">/KZ</span>
          </div>
          <button className="bg-myColor text-textbtn py-2 w-full rounded text-[14px] font-semibold my-4 hover:scale-[1.1] transition-all">Get access</button>
          <p className="text-p text-[13px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      
    </div>

  )
}

export default Item