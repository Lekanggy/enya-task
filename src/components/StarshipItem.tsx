import React, { useState } from 'react'
import Human from '../assets/planets.png'
import useFetech from '../hooks/useFetech'
import { useLocation } from 'react-router-dom'

const StartShipItem = () => {

    const item = useLocation().pathname.split("/")

    const {response} = useFetech(`https://swapi.dev/api/starships/${item[item.length - 1]}`)
    console.log("re", response)
  return (
    <div className="flex flex-col space-y-3">
               {/* <span className="inline-block text-base text-[#A4A7B7] font-norma">Film</span> */}
               <div className="flex items-start space-x-10">
                    <div className="w-[318px] h-[450px]">
                        <img src={Human} alt="human logo" className="w-full h-full object-cover"/>
                    </div>
                    <div className="flex flex-col space-y-5 pt-4">
                        <span className="inline-block text-[48px] leading-[24px] text-black font-bold">{response?.name ?? "n/a"}</span>
                        <div className="flex flex-col space-y-3">
                            <div className="flex items-center space-x-2">
                                <span className="inline-block text-base font-medium text-[#303B54]">Model</span> :
                                <span className="inline-block text-base font-medium text-[#434854]">{response?.model ?? "n/a"}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="inline-block text-base font-medium text-[#303B54]">Passengers</span> :
                                <span className="inline-block text-base font-medium text-[#434854]">{response?.passengers ?? "n/a"}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="inline-block text-base font-medium text-[#303B54]">Pilot</span> :
                                <span className="inline-block text-base font-medium text-[#434854]">{response?.pilots?.join(",")}</span>
                            </div>
                        </div>
                    </div>
               </div>
            </div> 
  )
}

export default StartShipItem