import React from 'react'

const TableLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="border rounded-[10px]">
        <table className="min-w-full divide-y divide-gray-200">
            { children}
        </table>
    </div>
  )
}

export default TableLayout