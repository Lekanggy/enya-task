import { truncateData } from "../../utilis/truncateData"

type TableDataProp = {
  data?: string
  children?: React.ReactNode
}
const TableData = ({data, children}:TableDataProp) => {

  return (
    <td className="px-[8px] text-[14px] font-medium text-[#303B54] rounded py-4 whitespace-nowrap font-inter">
      {
      data && truncateData(data)
      }
      {
        children && children
      }
    </td>
  )
}

export default TableData