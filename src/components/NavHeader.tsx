
import { AiOutlineBell } from "react-icons/ai";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Avatar from "../assets/avat.png"

const NavHeader = () => {
  return (
    <nav className="flex items-center divide-x-2">
        <span className="text-[18px] pr-5">
            <AiOutlineBell/>
        </span>
        <div className="flex space-x-5 items-center pl-5">
            <img src={Avatar} alt='avatar' className="w-[30px] h-[30px] rounded-full object-cover"/>
            <span className="inline-block text-[15px] font-normal text-[#303B54]">John Doe</span>

            <span className="text-base text-[#C4C4C4] pl-10">
                <HiOutlineDotsHorizontal/>
            </span>
        </div> 
    </nav>
  )
}

export default NavHeader