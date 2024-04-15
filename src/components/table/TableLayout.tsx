import React from 'react'

const TableLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="overflow-hidden border rounded-[10px] mb-5 px-3">
        <table className="min-w-full divide-y divide-gray-200">
            { children}
        </table>
    </div>
  )
}

export default TableLayout