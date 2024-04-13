

const columns = [
    {label: "Name", key: "12"},
    {label: "Model", key: "13"},
    {label: "Class", key: "152"},
    {label: "Passenger", key: "1662"},
    {label: "Length", key: "1265"},
    {label: "Character", key: "1672"},
]

 const data = ["Death start", "T-65 X Wing", "Start fighter", "200", "500 Meters", "https://swapi.dev/api/people"]
const Table = () => {
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
                    
                        <tr>
                            <td>
                                <input type='checkbox' className="w-[14px] h-[14px]"/>
                            </td>
                        {data.map((column) => (
                            <td key={column} className="px-6 py-4 whitespace-nowrap">
                            {column}
                            </td>
                        ))}
                        </tr>
                        <tr>
                            <td>
                                <input type='checkbox' className="w-[14px] h-[14px]"/>
                            </td>
                        {data.map((column) => (
                            <td key={column} className="px-6 py-4 whitespace-nowrap">
                            {column}
                            </td>
                        ))}
                        </tr>
                        <tr>
                            <td>
                                <input type='checkbox' className="w-[14px] h-[14px]"/>
                            </td>
                        {data.map((column) => (
                            <td key={column} className="px-6 py-4 whitespace-nowrap">
                            {column}
                            </td>
                        ))}
                        </tr>
                        
                    </tbody>
                </table>
  )
}

export default Table