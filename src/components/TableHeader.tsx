
type HeaderProp = {
    columns: Array<{[k:string]:string}>
}
const TableHeader = ({columns}:HeaderProp) => {
  return (
    <thead className="bg-gray-50">
        <tr>
            <th>
                <input type='checkbox' className="w-[14px] h-[14px]"/>
            </th>
            {columns.map((column) => (
                <th
                key={column.key}
                scope="col"
                className="px-3 py-3 text-left text-base font-medium text-[#A4A7B7] tracking-wider"
                >
                {column.label}
                </th>
            ))}
        </tr>
    </thead>
  )
}

export default TableHeader