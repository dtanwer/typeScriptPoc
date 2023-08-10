import React from 'react'
type headingProps={
    children:string
}
function Heading({children}:headingProps) {
  return (
    <div>
        <h1>{children}</h1>
        <button>Button</button>
    </div>
  )
}

export default Heading