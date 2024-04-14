import useFetech from "../hooks/useFetech"
import useHandleRoutes from "../hooks/useHandleRoutes"
import { convertTimeToDate } from "../utilis/dateFormat"
import TableData from "./TableData"
import TableHeader from "./TableHeader"


const columns = [
    {label: "Name", key: "12"},
    {label: "Classification", key: "13"},
    {label: "Eye color", key: "152"},
    {label: "Hair color", key: "1662"},
    {label: "Height", key: "1265"},
    {label: "Created", key: "1672"},
]

const SpeciesTable = () => {
    const {response} = useFetech("https://swapi.dev/api/species")
    const {handleRoute} = useHandleRoutes()
  return (
    <table className="divide-y divide-gray-200">
        <TableHeader columns={columns}/>
        <tbody className="bg-white divide-y divide-gray-200">
            {
                !response?.results && <div>Loading</div>
            }
        
            {
                response?.results?.map((item:{[k:string]:any}, index:number)=>(
                    <tr onClick={()=>handleRoute(index + 1)} key={index}>
                        <td>
                            <input type='checkbox' className="w-[14px] h-[14px]"/>
                        </td>
                        <TableData data={item.name}/>
                        <TableData data={item.classification}/>
                        <TableData data={item.eye_colors}/>
                        <TableData data={item.hair_colors}/>
                        <TableData data={item.average_height}/>
                        <TableData data={convertTimeToDate(item.created)}/>
                    </tr>
                ))
            }
            
        </tbody>
    </table>
  )
}

export default SpeciesTable