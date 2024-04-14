
import useFetech from "../hooks/useFetech"
import useHandleRoutes from "../hooks/useHandleRoutes"
import TableData from "./TableData"
import TableHeader from "./TableHeader"


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
        <TableHeader columns={columns}/>
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
                        <TableData data={item.title}/>
                        <TableData data={item.release_date}/>
                        <TableData data={item.director}/>
                        <TableData data={item.producer}/>
                        <TableData data={item.episode_id}/>
                        <TableData data={item.url}/>
                    </tr>
                ))
            }
            
        </tbody>
    </table>
  )
}

export default Table