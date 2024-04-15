import { MainHeaderProp } from './MainHeader'
import { Outlet } from 'react-router-dom'

const MainSideRoute = ({urlItems}:MainHeaderProp) => {
  return (
    <div className="flex flex-col space-y-3 pt-10">
        <span className="inline-block text-base text-[#A4A7B7] font-norma">
            {
                urlItems.length < 4 && urlItems[2]
            }
        </span>
        <Outlet/>
    </div>
  )
}

export default MainSideRoute