
import { useNavigate } from 'react-router-dom'
import { generateMatch } from '../utilis/generateMatch'

const useHandleRoutes = () => {
    const navigate = useNavigate()

    const handleRoute = (url:string | number)=>{
        if(typeof(url) === "string"){
            const num  = generateMatch(url)
            navigate(`${num}`);
        }

        if(typeof(url) === "number") navigate(`${url}`)
    }

    return {handleRoute}
}

export default useHandleRoutes