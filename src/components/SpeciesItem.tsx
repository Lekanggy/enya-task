import React, { useState } from 'react'
import Human from '../assets/cover.png'
import useFetech from '../hooks/useFetech'
import { useLocation } from 'react-router-dom'

const SpeciesItem = () => {

    const item = useLocation().pathname.split("/")
    const {response} = useFetech(`https://swapi.dev/api/species/${item[item.length - 1]}`)

  return (
    <div className="flex flex-col space-y-3">
               {/* <span className="inline-block text-base text-[#A4A7B7] font-norma">Film</span> */}
               <div className="flex items-start space-x-10">
                    <div className="w-[318px] h-[450px]">
                        <img src={Human} alt="human logo" className="w-full h-full object-cover"/>
                    </div>
                    <div className="flex flex-col space-y-5 pt-4">
                        <span className="inline-block text-[48px] leading-[24px] text-black font-bold">{response?.name}</span>
                        <div className="flex flex-col space-y-3">
                            <div className="flex items-center space-x-2">
                                <span className="inline-block text-base font-medium text-[#303B54]">Designation</span> :
                                <span className="inline-block text-base font-medium text-[#434854]">{response?.designation}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="inline-block text-base font-medium text-[#303B54]">Language</span> :
                                <span className="inline-block text-base font-medium text-[#434854]">{response?.language}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="inline-block text-base font-medium text-[#303B54]">Eye Color</span> :
                                <span className="inline-block text-base font-medium text-[#434854]">{response?.eye_color}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="inline-block text-base font-medium text-[#303B54]">Average Lifespan</span> :
                                <span className="inline-block text-base font-medium text-[#434854]">{response?.average_lifespan}</span>
                            </div>
                        </div>
                    </div>
               </div>
            </div> 
  )
}

export default SpeciesItem