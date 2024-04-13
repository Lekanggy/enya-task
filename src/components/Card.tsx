import React from 'react'

type Cards = {
  bg: string,
  txt: string
}
const Card = ({bg, txt}:Cards) => {
  return (
    <div className="flex flex-col justify-between w-[208px] h-[130px] shadow-lg rounded-[10px] bg-white px-3 py-3 cursor-pointer">
      <div className="flex justify-between items-center">
          <span className="inline-block text-base font-bold text-[#434854]">{txt}</span>
          <span className={`inline-block w-[27px] h-[26px] rounded-[5px] ${bg}`}/>
      </div>
      <div className="flex flex-col space-y-1">
          <span className="inline-block text-base font-bold text-[#434854]">200</span>
          <span className="text-[9px] text-[#00992B] font-normal">20 More than yesterday</span>
      </div>
    </div>
  )
}

export default Card