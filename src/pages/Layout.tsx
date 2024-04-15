import React from 'react'

type LayOutProp = {
    children: React.ReactNode
}

const PageLayout = ({children}:LayOutProp) => {
  return (
    <div className="flex min-h-full pr-10">
        {children}
    </div>
  )
}

export default PageLayout