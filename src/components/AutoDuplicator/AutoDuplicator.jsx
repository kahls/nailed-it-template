import React, { useState, useEffect } from 'react'
import Duplicator from '../Duplicator/Duplicator';

function AutoDuplicator({ interval, clear, children }) {
    const [duplicates, setDuplicates] = useState([])

    useEffect(() => {
      const duplicate = setInterval(() => {
          setDuplicates((duplicates) => [...duplicates, children])
      }, interval * 1000);
      return () => {
        clearInterval(duplicate)
      }
    }, [])

    useEffect(() => {
        if (clear === true)
            setDuplicates([])
    }, [clear])
    
    

  return (
    <>
        <Duplicator clear={clear}>
            {children}
        </Duplicator>
        {duplicates.map((item, index) => ( 
            <Duplicator clear={clear} key={index}>
                {item}
            </Duplicator>
        ))}
    </>
  )
}

export default AutoDuplicator