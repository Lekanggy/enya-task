
import Human from '../../../../assets/star2.png'
import { useLocation } from 'react-router-dom'
import DescriptionImage from '../../../../components/DescriptionImage'
import useFetech from '../../../../hooks/useFetech'
import DescriptionItem from '../../../../components/DescriptionItem'

const PeopleItem = () => {

    const item = useLocation().pathname.split("/")
    const {response} = useFetech(`https://swapi.dev/api/people/${item[item.length - 1]}`)
    
  return (
    
    <div className="flex items-start space-x-10">
        <DescriptionImage sr={Human} alt='People Image'/>
        <div className="flex flex-col space-y-5 pt-4">
            <span className="inline-block text-[48px] leading-[24px] text-black font-bold">{response?.name}</span>
            <div className="flex flex-col space-y-3">
                <DescriptionItem title='Gender' description={response?.gender}/>
                <DescriptionItem title='Year of Birth' description={response?.birth_year}/>
                <DescriptionItem title='Skin Color' description={response?.skin_color}/>
                <DescriptionItem title='Height' description={response?.height + "CM"}/>
            </div>
        </div>
    </div>
        
  )
}

export default PeopleItem