import React, { useState, useEffect } from 'react'

// Duplicates children on click
const Duplicator = ({ children, clear }) => {

    const [duplicates, setDuplicates] = useState([])

    const handleClick = () => {
        setDuplicates((duplicates) => [...duplicates, children])
    }

    useEffect(() => {
      if (clear === true)
          setDuplicates([])
    }, [clear])
    
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