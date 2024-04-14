
import Human from '../assets/cover.png'
import useFetech from '../hooks/useFetech'
import { useLocation } from 'react-router-dom'

const FilmItem = () => {

    const item = useLocation().pathname.split("/")
    const {response} = useFetech(`https://swapi.dev/api/films/${item[item.length - 1]}`)

  return (
    
              
    <div className="flex items-start space-x-10 ">
        <div className="w-[318px] h-[450px]">
            <img src={Human} alt="human logo" className="w-full h-full object-cover"/>
        </div>
        <div className="flex flex-col space-y-5 pt-4">
            <span className="inline-block text-[48px] leading-[24px] text-black font-bold">{response?.title}</span>
            <div className="flex flex-col space-y-3">
                <div className="flex items-center space-x-2">
                    <span className="inline-block text-base font-medium text-[#303B54]">Director</span> :
                    <span className="inline-block text-base font-medium text-[#434854]">{response?.director}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="inline-block text-base font-medium text-[#303B54]">Producer</span> :
                    <span className="inline-block text-base font-medium text-[#434854]">{response?.producer}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="inline-block text-base font-medium text-[#303B54]">Release Date</span> :
                    <span className="inline-block text-base font-medium text-[#434854]">{response?.release_date}</span>
                </div>
            </div>
        </div>
    </div>
   
  )
}

export default FilmItem