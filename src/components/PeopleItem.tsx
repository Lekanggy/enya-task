
import Human from '../assets/star2.png'
import useFetech from '../hooks/useFetech'
import { useLocation } from 'react-router-dom'

const PeopleItem = () => {

    const item = useLocation().pathname.split("/")
    const {response} = useFetech(`https://swapi.dev/api/people/${item[item.length - 1]}`)
    
  return (
    
    <div className="flex items-start space-x-10">
        <div className="w-[318px] h-[450px]">
            <img src={Human} alt="human logo" className="w-full h-full object-cover"/>
        </div>
        <div className="flex flex-col space-y-5 pt-4">
            <span className="inline-block text-[48px] leading-[24px] text-black font-bold">{response?.name}</span>
            <div className="flex flex-col space-y-3">
                <div className="flex items-center space-x-2">
                    <span className="inline-block text-base font-medium text-[#303B54]">Gender</span> :
                    <span className="inline-block text-base font-medium text-[#434854]">{response?.gender}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="inline-block text-base font-medium text-[#303B54]">Year of Birth</span> :
                    <span className="inline-block text-base font-medium text-[#434854]">{response?.birth_year}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="inline-block text-base font-medium text-[#303B54]">Skin Color</span> :
                    <span className="inline-block text-base font-medium text-[#434854]">{response?.skin_color}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="inline-block text-base font-medium text-[#303B54]">Height</span> :
                    <span className="inline-block text-base font-medium text-[#434854]">{response?.height + "CM"} </span>
                </div>
            </div>
        </div>
    </div>
        
  )
}

export default PeopleItem