import useFetech from "../hooks/useFetech"
import useHandleRoutes from "../hooks/useHandleRoutes"
import { convertTimeToDate } from "../utilis/dateFormat"


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
                    <thead className="bg-gray-50">
                        <tr>
                            <th>
                                <input type='checkbox' className="w-[14px] h-[14px]"/>
                            </th>
                            {columns.map((column) => (
                                <th
                                key={column.key}
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                {column.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
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
                                    <td className="px-6 py-4 whitespace-nowrap">
                                    {item.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                    {item.birth_year}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                    {item.gender}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                    {item.hair_color}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                    {item.height}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                    {convertTimeToDate(item.created)}
                                    </td>
                                    
                                </tr>
                            ))
                        }
                       
                    </tbody>
                </table>
  )
}

export default  PeopleTable