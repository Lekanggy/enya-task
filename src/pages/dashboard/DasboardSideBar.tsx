import StarLogo from '../../assets/starw.png'
import { FaThLarge } from "react-icons/fa";
import { sideItems } from './data';

type SidebarProps = {
    handleRoute: (name: string) => void
    active: string
}
const DashboardSideBar = ({handleRoute, active}:SidebarProps) => {
  return (
    <div className="w-[300px] flex flex-col items-center bg-[#031434] min-h-screen px-3 pt-8">
        <div className="w-[120px] h-[50px] mb-8">
            <img src={StarLogo} alt='logo'  className="w-full h-full object-cover"/>
        </div>
    

        <div className="flex flex-col space-y-5">
            <div 
                className={`flex items-center w-[240px] h-[48px] rounded mb-10 space-x-5 pl-5 ${active === "" && 'bg-[#0A74DC]'}`} 
                onClick={()=>handleRoute("")}
            >
                <span className="inline-flex text-white text-base justify-center items-center font-semibold">
                    <FaThLarge />
                </span>
                <span className="inline-block text-base font-semibold text-white">Overview</span>
            </div>
            {
                sideItems.map((item)=>(
                    <div 
                        className={`flex items-center w-[240px] h-[48px] rounded  space-x-5 pl-5 cursor-pointer ${active === item.name && 'bg-[#0A74DC]'}`} 
                        key={item.name} 
                        onClick={()=>handleRoute(item.name)}
                    >
                        <span className={`inline-block w-[17px] h-[16px] rounded-[5px] ${item.col}`}/>
                        <span className="inline-flex text-white text-base justify-center items-center font-semibold">{item.name}</span>
                    </div>
                ))
            }
        
        </div>
    
    </div>
  )
}

export default DashboardSideBar