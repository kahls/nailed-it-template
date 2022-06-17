import React, { useContext } from 'react'
import {TimerContext} from "../../App";

const DummyLink = ({ textCopy}) => {
  const timer = useContext(TimerContext)

  const handleClick = () => {
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