
import Species from '../../../assets/monkey.png'
import DescriptionImage from '../../../components/DescriptionImage'
import DescriptionItem from '../../../components/DescriptionItem'
import useFetech from '../../../hooks/useFetech'
import { useLocation } from 'react-router-dom'

const SpeciesItem = () => {

    const item = useLocation().pathname.split("/")
    const {response} = useFetech(`https://swapi.dev/api/species/${item[item.length - 1]}`)

  return (
   
    <div className="flex items-start space-x-10">
        <DescriptionImage sr={Species} alt="Species Logo"/>
        <div className="flex flex-col space-y-5 pt-4">
            <span className="inline-block text-[48px] leading-[24px] text-black font-bold">{response?.name}</span>
            <div className="flex flex-col space-y-3">
                <DescriptionItem title='Designation' description={response?.designation}/>
                <DescriptionItem title='Language' description={response?.language}/>
                <DescriptionItem title='Eye Color' description={response?.eye_colors}/>
                <DescriptionItem title='Average Lifespan' description={response?.average_lifespan}/>
            </div>
        </div>
    </div>
         
  )
}

export default SpeciesItem