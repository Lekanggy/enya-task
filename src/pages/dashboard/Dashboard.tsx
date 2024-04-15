import { useState } from 'react';

import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import PageLayout from '../PageLayout';
import DashboardSideBar from './DasboardSideBar';
import MainSide from "./main-side/MainSide";


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
    <PageLayout>

        {/* Sidebar */}
        <DashboardSideBar handleRoute={handleRoute} active={active}/>

        {/* Main components */}
        <MainSide urlItems={item} active={active}/>

    </PageLayout>
  )
}

export default Dashboard