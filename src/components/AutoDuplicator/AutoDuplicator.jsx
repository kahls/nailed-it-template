import React, { useState, useEffect } from 'react'
import Duplicator from '../Duplicator/Duplicator';

function AutoDuplicator({ interval, clear, children }) {

    const [duplicates, setDuplicates] = useState([])

    const duplicate = () => {
        setInterval(() => {
            setDuplicates((duplicates) => [...duplicates, children]) 
        }, interval * 1000);
    }

    useEffect(() => {
      duplicate();
      return () => {
        clearInterval()
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
        {duplicates.map(item => ( 
            <Duplicator clear={clear}>
                {item}
            </Duplicator>
        ))}
    </>
  )
}

export default AutoDuplicator