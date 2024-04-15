
import StarShip from '../../../../assets/planets.png'
import DescriptionImage from '../../../../components/DescriptionImage'
import useFetech from '../../../../hooks/useFetech'
import DescriptionItem from '../../../../components/DescriptionItem'
import { useLocation } from 'react-router-dom'

const StartShipItem = () => {

    const item = useLocation().pathname.split("/")

    const {response} = useFetech(`https://swapi.dev/api/starships/${item[item.length - 1]}`)
    console.log("re", response)
  return (
   
               
    <div className="flex items-start space-x-10">
        <DescriptionImage sr={StarShip} alt="Star ship logo"/>
        
        <div className="flex flex-col space-y-5 pt-4">
            <span className="inline-block text-[48px] leading-[48px] text-black font-bold">{response?.name ?? "n/a"}</span>
            <div className="flex flex-col space-y-3">
                <DescriptionItem title='Model' description={response?.model ?? "n/a"}/>
                <DescriptionItem title='Passengers' description={response?.passengers ?? "n/a"}/>
                <DescriptionItem title='Pilot' description={response?.pilots?.join(",")}/>
            </div>
        </div>
    </div>
          
  )
}

export default StartShipItem