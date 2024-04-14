import { useNavigate } from "react-router-dom"
import useFetech from "../hooks/useFetech"
import { generateMatch } from "../utilis/generateMatch"
import useHandleRoutes from "../hooks/useHandleRoutes"


const columns = [
    {label: "FilmTitle", key: "12"},
    {label: "Release Date", key: "13"},
    {label: "Director", key: "152"},
    {label: "Producer", key: "1662"},
    {label: "Episode ID", key: "1265"},
    {label: "Character", key: "1672"},
]

const Table = () => {
    const {response} = useFetech("https://swapi.dev/api/films")
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
                            response?.results?.map((item:{[k:string]:any})=>(
                                <tr onClick={()=>handleRoute(item?.url)} key={item.title}>
                                    <td>
                                        <input type='checkbox' className="w-[14px] h-[14px]"/>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                    {item.title}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                    {item.release_date}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                    {item.director}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                    {item.producer}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                    {item.episode_id}
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

export default Table