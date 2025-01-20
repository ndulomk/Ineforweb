import { FaMoon, FaSearch, FaSun } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { changeboolean, setboolean } from "../../redux/booleanSlice"
import { useEffect, useRef, useState } from "react"
import { CgMoon, CgSun } from "react-icons/cg"
import { BsX } from "react-icons/bs"
import { FiCalendar } from "react-icons/fi"

const Navbar = () => {
  const dispatch = useDispatch()
  const [showmodal, setShowModal] = useState(false)
  const [darkmode, setDarkmode] = useState(false)
  const myvalue = useSelector(state=>state.boolean.boolean)
  const mode =()=>{
    dispatch(setboolean(darkmode))
  }
  const changemode=()=>{
    dispatch(changeboolean(myvalue))
  }
  const modal = useRef(null)
  return (
    <nav className="border-b px-4 mt-2 pb-4 border-border mb-4" >
          <div className="">
      <div className="flex items-center justify-between p-0.5">
        <div>
          <span className="text-sm font-bold block">
            Good morning, Eddie
          </span>
          <span className="text-xs block text-p">Monday, Nov 18 2023</span>
        </div>
        <div className="flex items-center gap-4">
          {myvalue === true?<CgSun onClick={changemode} className="shadow-xl hover:shadow-white cursor-pointer transition-all" size={18}/>:<CgMoon onClick={mode} className="shadow-xl hover:shadow-white cursor-pointer transition-all" size={18}/>}
          <button className="px-3 py-1.5 rounded-[20px] bg-btn text-textbtn font-semibold text-[13px] hover:scale-[1.1] hover:text-white transition-[0.5s] ">Sign in</button>
        </div>
      </div>
    </div>
    </nav>
  )
}

export default Navbar