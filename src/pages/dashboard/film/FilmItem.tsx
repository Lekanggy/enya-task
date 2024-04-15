
import Cover from '../../../assets/cover.png'
import DescriptionImage from '../../../components/DescriptionImage'
import DescriptionItem from '../../../components/DescriptionItem'
import useFetech from '../../../hooks/useFetech'
import { useLocation } from 'react-router-dom'

const FilmItem = () => {

    const item = useLocation().pathname.split("/")
    const {response} = useFetech(`https://swapi.dev/api/films/${item[item.length - 1]}`)

  return (
    
              
    <div className="flex items-start space-x-10 mb-3">
        <DescriptionImage sr={Cover} alt='human image'/>
        <div className="flex flex-col space-y-5 pt-4">
            <span className="inline-block text-[48px] leading-[24px] text-black font-bold">{response?.title}</span>
            <div className="flex flex-col space-y-3">
                <DescriptionItem title='Director' description={response?.director}/>
                <DescriptionItem title='Producer' description={response?.producer}/>
                <DescriptionItem title='Release Date' description={response?.release_date}/>
            </div>
        </div>
    </div>
   
  )
}

export default FilmItem