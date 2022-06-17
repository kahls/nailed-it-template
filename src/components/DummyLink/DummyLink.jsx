import React, { useContext } from 'react'
import {TimerContext} from "../../context/TimerProvider";

const DummyLink = ({ textCopy}) => {
  const timer = useContext(TimerContext)

  return (
    <a 
      style={{
        cursor: 'pointer', color: 'white', textDecoration: 'underline',
      }}
      className="dummy-link"
      onClick={()=>timer.setShowTimer(true)}
    >
        {textCopy}
    </a>
  )
}

export default DummyLink;