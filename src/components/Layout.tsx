import React from 'react'

type LayOutProp = {
    children: React.ReactNode
}
const Layout = ({children}:LayOutProp) => {
  return (
    <div className="flex h-screen">
        {children}
    </div>
  )
}

export default Layout