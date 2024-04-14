import useFetech from "../hooks/useFetech"
import useHandleRoutes from "../hooks/useHandleRoutes"
import { convertTimeToDate } from "../utilis/dateFormat"
import TableData from "./TableData"
import TableHeader from "./TableHeader"


const columns = [
    {label: "Name", key: "12"},
    {label: "Birth Year", key: "13"},
    {label: "Gender", key: "152"},
    {label: "Hair color", key: "1662"},
    {label: "Height", key: "1265"},
    {label: "Created", key: "1672"},
]

const PeopleTable = () => {
    const {response} = useFetech("https://swapi.dev/api/people")
    const {handleRoute} = useHandleRoutes()
  return (
    <table className="min-w-full divide-y divide-gray-200">
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
                        <TableData data={item.birth_year}/>
                        <TableData data={item.gender}/>
                        <TableData data={item.hair_color}/>
                        <TableData data={item.height}/>
                        <TableData data={convertTimeToDate(item.created)}/>
                    </tr>
                ))
            }
            
        </tbody>
    </table>
  )
}

export default  PeopleTable