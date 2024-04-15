import { cardItems} from '../data';
import Card from '../../../components/Card';
import MainSideHeader from "./MainHeader";
import MainSideRoute from "./MainSideRoute";

type MainSideProp = {
    urlItems: string[]
    active: string
}
const MainSide = ({urlItems, active}:MainSideProp) => {

    const displayCard = (active.length === 0 && urlItems.length < 4 && urlItems[2] === "films")
  
  return (
    <div className="flex flex-col pt-5 pl-10 w-full">
        <MainSideHeader urlItems={urlItems}/>
        <div className={`flex items-center space-x-8 ${displayCard && 'pt-8'}`}>
            {
                displayCard &&   cardItems.map(card=> <Card txt={card.name} bg={card.col} key={card.name}/>)
            }
        </div>
       <MainSideRoute urlItems={urlItems}/>
    </div>
  )
}

export default MainSide