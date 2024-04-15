import React from 'react'

type LayOutProp = {
    children: React.ReactNode
}

const Layout = ({children}:LayOutProp) => {
  return (
    <div className="flex min-h-full">
        {children}
    </div>
  )
}

export default Layout