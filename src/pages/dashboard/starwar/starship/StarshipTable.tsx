import TableData from "../../../../components/table/TableData"
import TableHeader from "../../../../components/table/TableHeader"
import TableLayout from "../../../../components/table/TableLayout"
import useFetech from "../../../../hooks/useFetech"
import useHandleRoutes from "../../../../hooks/useHandleRoutes"


const columns = [
    {label: "Name", key: "12"},
    {label: "Model", key: "13"},
    {label: "Class", key: "152"},
    {label: "Passenger", key: "1662"},
    {label: "Length", key: "1265"},
    {label: "Character", key: "1672"},
]

const StarshipTable = () => {
    const {response} = useFetech(" https://swapi.dev/api/starships")
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
                    <tr onClick={()=>handleRoute(index + 1)} key={index+1}>
                        <TableData>
                            <input type='checkbox' className="w-[14px] h-[14px]"/>
                        </TableData>
                        <TableData data={item.name}/>
                        <TableData data={item.model}/>
                        <TableData data={item.starship_class}/>
                        <TableData data={item.passengers}/>
                        <TableData data={item.length}/>
                        <TableData data={item.url}/>
                    </tr>
                ))
            }
            
        </tbody>
   </TableLayout>
  )
}

export default StarshipTable