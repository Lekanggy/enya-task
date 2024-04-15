import NavigateBack from '../../../components/NavigateBack'
import NavHeader from '../../../components/NavHeader'

export type MainHeaderProp = {
    urlItems: string[]
}
const MainSideHeader = ({urlItems}:MainHeaderProp) => {
  return (
    <div className="flex justify-between items-center">
        {
            urlItems.length === 4 
            ? <NavigateBack/> 
            :<div className="flex items-center space-x-1 cursor-pointer"/>
        }
        
        <NavHeader/>
    </div>
  )
}

export default MainSideHeader