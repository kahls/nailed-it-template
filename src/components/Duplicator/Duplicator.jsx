import React, { useState } from 'react'

// Duplicates children on click
const Duplicator = ({ children}) => {

    const [duplicates, setDuplicates] = useState([])

    const handleClick = () => {
        setDuplicates((duplicates) => [...duplicates, children])
    }
    
  return (
    <div>
        <div onClick={handleClick}>
            {children}
        </div>
        {duplicates.map(item => {
          return (
            <div onClick={handleClick}>
              {item}
            </div>
          )
        })}
    </div>
  )
}

export default Duplicator;