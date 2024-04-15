import { MdOutlineArrowBackIos } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const NavigateBack = () => {
    const navigate = useNavigate()
  return (
    <div className="flex items-center space-x-1 cursor-pointer" onClick={()=>navigate(-1)}>
        <span className="inline-flex justify-center items-center text-base font-normal text-[#A4A7B7]">
            <MdOutlineArrowBackIos/>
        </span>
        <span className="inline-flex justify-center items-center text-base font-normal text-[#A4A7B7]">Back</span>
    </div>
  )
}

export default NavigateBack