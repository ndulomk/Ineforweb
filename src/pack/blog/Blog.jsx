import { blog } from "../object/objects"

const Blog = () => {
  return (
    <div className="my-8 px-[2%]">
      <div className="text-center my-8">
        <h2 className="text-[30px] font-bold uppercase">From the blog</h2>
        <p className="text-[14px] text-p">learn how to grow your business with our expert advice</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {
          blog.map((item, index)=>{

            return(
              <div key={index} className="shadow p-2 rounded">
                <img src={item.link} alt="" className="rounded-xl hover:scale-[1.1] transition-all"/>
                <div className="text-[13px] flex gap-4 text-p my-2">
                  <span className="">{item.date}</span>
                  <span className="">{item.type}</span>
                </div>
                <h3 className="font-bold uppercase my-2">{item.nome}</h3>
                <p className="text-p text-[13px]">{item.info}</p>
                <div className="flex items-center gap-2 my-4">
                  <img src="foto.png" alt="" className="w-[40px] h-[40px]"/>
                  <div>
                    <p className="text-[13px] font-bold">@{item.by}</p>
                    <p className="text-p text-[13px]">Developer</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Blog