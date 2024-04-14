import useFetech from "../hooks/useFetech"
import useHandleRoutes from "../hooks/useHandleRoutes"


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
                                <tr onClick={()=>handleRoute(index + 1)} key={index+1}>
                                    <td>
                                        <input type='checkbox' className="w-[14px] h-[14px]"/>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                    {item.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                    {item.model}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                    {item.starship_class}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                    {item.passengers}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                    {item.length}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                    {item.url}
                                    </td>
                                    
                                </tr>
                            ))
                        }
                       
                    </tbody>
                </table>
  )
}

export default StarshipTable