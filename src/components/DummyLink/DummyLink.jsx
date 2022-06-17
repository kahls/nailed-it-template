import React, { useContext } from 'react'
import {TimerContext} from "../../context/TimerProvider";

const DummyLink = ({ textCopy}) => {
  const timer = useContext(TimerContext)

  const handleClick = () => {
    console.log('click!')
    timer.setShowTimer(true)
  }

  return (
    <div 
      style={{
        cursor: 'pointer', color: 'blue', textDecoration: 'underline'
      }}
      onClick={handleClick}
    >
        {textCopy}
    </div>
  )
}

export default DummyLink;