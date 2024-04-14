import Layout from '../components/Layout'
import StarLogo from '../assets/starw.png'

import { FaThLarge } from "react-icons/fa";
import { AiOutlineBell } from "react-icons/ai";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdOutlineArrowBackIos } from "react-icons/md";
import Avatar from "../assets/avat.png"
import { useState } from 'react';
import { cardItems, sideItems } from './data';
import Card from '../components/Card';

import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';


const Dashboard = () => {
    const [active, setActive] = useState("")
    const item = useLocation().pathname.split("/")
    const navigate = useNavigate()
    const handleRoute = (name:string)=>{
        if(name === ""){
            setActive(name)
            navigate("Films")
        }
        
        setActive(name)
        navigate(name)
    }

//console.log(useLocation().pathname.split("/"))

  if(item.length === 2){
    return <Navigate replace to="/dashboard/films"/>;
  }

   
  return (
    <Layout>
        {/* Sidebar */}
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
        {/* Main components */}

        <div className="flex flex-col pt-5 pl-10 w-full">
            <div className="flex justify-between items-center">
                {
                    item.length === 4 ? (
                        <div className="flex items-center space-x-1 cursor-pointer" onClick={()=>navigate(-1)}>
                            <span className="inline-flex justify-center items-center text-base font-normal text-[#A4A7B7]">
                                <MdOutlineArrowBackIos/>
                            </span>
                            <span className="inline-flex justify-center items-center text-base font-normal text-[#A4A7B7]">Back</span>
                        </div>
                    ):<div className="flex items-center space-x-1 cursor-pointer"/>
                }
                
              
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
            </div>
            <div className="flex items-center space-x-16 pt-8">
                {
                 (active.length === 0 && item.length < 4) &&   cardItems.map(card=> <Card txt={card.name} bg={card.col} key={card.name}/>)
                }
            </div>
            
            <div className="flex flex-col space-y-3 pt-10">
                <span className="inline-block text-base text-[#A4A7B7] font-norma">{item.length < 4 && item[2]}</span>
                <Outlet/>
                {/* <Table/> */}
            </div>
           
        </div>
    </Layout>
  )
}

export default Dashboard