import TableData from "../../../../components/table/TableData"
import TableHeader from "../../../../components/table/TableHeader"
import TableLayout from "../../../../components/table/TableLayout"
import useFetech from "../../../../hooks/useFetech"
import useHandleRoutes from "../../../../hooks/useHandleRoutes"
import { convertTimeToDate } from "../../../../utilis/dateFormat"


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
    <TableLayout>
        <TableHeader columns={columns}/>
        <tbody className="bg-white divide-y divide-gray-200">
            {
                !response?.results && <div className="pl-12">Loading</div>
            }
            
            {
                response?.results?.map((item:{[k:string]:any}, index:number)=>(
                    <tr onClick={()=>handleRoute(index + 1)} key={index}>
                        <TableData>
                            <input type='checkbox' className="w-[14px] h-[14px]"/>
                        </TableData>
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
    </TableLayout>
   
  )
}

export default  PeopleTable