import { truncateData } from "../../utilis/truncateData"

const TableData = ({data}:{data:string}) => {

  return (
    <td className="px-5 text-base font-medium text-[#303B54] rounded py-4 whitespace-nowrap font-inter">
    {truncateData(data)}
    </td>
  )
}

export default TableData