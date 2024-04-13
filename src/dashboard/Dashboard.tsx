import Layout from '../components/Layout'
import StarLogo from '../assets/starw.png'

import { FaThLarge } from "react-icons/fa";
import { AiOutlineBell } from "react-icons/ai";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Avatar from "../assets/avat.png"

const Dashboard = () => {
  return (
    <Layout>
        {/* Sidebar */}
        <div className="w-[300px] flex flex-col items-center bg-[#031434] h-full px-3 pt-8">
            <div className="w-[120px] h-[50px] mb-8">
                <img src={StarLogo} alt='logo'  className="w-full h-full object-cover"/>
            </div>
            <div className="flex items-center w-[240px] h-[48px] rounded bg-[#0A74DC] mb-16 space-x-5 pl-5">
                    <span className="inline-flex text-white text-base justify-center items-center font-semibold">
                        <FaThLarge />
                    </span>
                    <span className="inline-block text-base font-semibold text-white">Overview</span>
            </div>

            <div className="flex flex-col space-y-5">
                <div className="flex items-center w-[232px] h-[48px] space-x-4 pl-2">
                    <span className="inline-block w-[17px] h-[16px] bg-[#A9C1FF] rounded-[5px]"/>
                    <span className="inline-block text-base font-semibold text-white">Starships</span>
                </div>
                <div className="flex items-center w-[232px] h-[48px] space-x-4 pl-2">
                    <span className="inline-block w-[17px] h-[16px] bg-[#A9C1FF] rounded-[5px]"/>
                    <span className="inline-block text-base font-semibold text-white">Starships</span>
                </div>
                <div className="flex items-center w-[232px] h-[48px] space-x-4 pl-2">
                    <span className="inline-block w-[17px] h-[16px] bg-[#A9C1FF] rounded-[5px]"/>
                    <span className="inline-block text-base font-semibold text-white">Starships</span>
                </div>
            </div>
           
        </div>
        {/* Main components */}

        <div className="flex flex-col pt-10 pl-10">
            <header className="flex justify-end mb-10">
                <nav className="flex justify-end items-center divide-x-2">
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
            </header>
            {/* Cards Items */}
            <div className="flex items-center space-x-8">
                <div className="flex flex-col justify-between w-[208px] h-[130px] shadow-lg rounded-[10px] bg-white px-3 py-3">
                    <div className="flex justify-between items-center">
                        <span className="inline-block text-base font-bold text-[#434854]">Films</span>
                        <span className="inline-block w-[27px] h-[26px] bg-[#A9C1FF] rounded-[5px]"/>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <span className="inline-block text-base font-bold text-[#434854]">200</span>
                        <span className="text-[9px] text-[#00992B] font-normal">20 More than yesterday</span>
                    </div>
                </div>
                <div className="flex flex-col justify-between w-[208px] h-[130px] shadow-lg rounded-[10px] bg-white px-3 py-3">
                    <div className="flex justify-between items-center">
                        <span className="inline-block text-base font-bold text-[#434854]">Films</span>
                        <span className="inline-block w-[27px] h-[26px] bg-[#A9C1FF] rounded-[5px]"/>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <span className="inline-block text-base font-bold text-[#434854]">200</span>
                        <span className="text-[9px] text-[#00992B] font-normal">20 More than yesterday</span>
                    </div>
                </div>
                <div className="flex flex-col justify-between w-[208px] h-[130px] shadow-lg rounded-[10px] bg-white px-3 py-3">
                    <div className="flex justify-between items-center">
                        <span className="inline-block text-base font-bold text-[#434854]">Films</span>
                        <span className="inline-block w-[27px] h-[26px] bg-[#A9C1FF] rounded-[5px]"/>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <span className="inline-block text-base font-bold text-[#434854]">200</span>
                        <span className="text-[9px] text-[#00992B] font-normal">20 More than yesterday</span>
                    </div>
                </div>
                <div className="flex flex-col justify-between w-[208px] h-[130px] shadow-lg rounded-[10px] bg-white px-3 py-3">
                    <div className="flex justify-between items-center">
                        <span className="inline-block text-base font-bold text-[#434854]">Films</span>
                        <span className="inline-block w-[27px] h-[26px] bg-[#A9C1FF] rounded-[5px]"/>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <span className="inline-block text-base font-bold text-[#434854]">200</span>
                        <span className="text-[9px] text-[#00992B] font-normal">20 More than yesterday</span>
                    </div>
                </div>
            </div>
            {/* Table component Items */}
            <div>

            </div>
        </div>
    </Layout>
  )
}

export default Dashboard