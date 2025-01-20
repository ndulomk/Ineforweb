import AccountToggle from "./sidebar/AccountToggle"
import Search from "./sidebar/Search"
import SideItems from "./sidebar/SideItems"

const Sidebar = ({commandOn, setState}) => {


  return (
    <div>
      <div className="overflow-y-hidden sticky top-3 h-[calc(100vh-32px-48px)] px-[2%]">
       <AccountToggle/>
       <Search commandOn={commandOn}/>
       <SideItems setState={setState}/>
      </div>
    </div>
  )
}

export default Sidebar