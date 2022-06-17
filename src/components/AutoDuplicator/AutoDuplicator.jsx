import React, { useState, useEffect } from 'react'
import Duplicator from '../Duplicator/Duplicator';

function AutoDuplicator({ interval, children }) {

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
    

  return (
    <>
        <Duplicator>
            {children}
        </Duplicator>
        {duplicates.map(item => ( 
            <Duplicator>
                {item}
            </Duplicator>
        ))}
    </>
  )
}

export default AutoDuplicator