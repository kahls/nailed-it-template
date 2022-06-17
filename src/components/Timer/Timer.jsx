import React, {useState, useContext, useEffect} from "react";
import "./timer.css";
import {TimerContext} from "../../context/TimerProvider";

const Timer = () => {
    const timer = useContext(TimerContext);
    const [timerInterval, setTimerInterval] = useState(0);
    const [activeTimerCount, setActiveTimerCount] = useState(0);

    useEffect(()=>{
       if (timer.showTimer) {
            const newInterval = timerInterval === 0 ? 3 : Math.floor(timerInterval * 1.5, 10)
            setTimerInterval(newInterval)
            setActiveTimerCount(newInterval)
       }
    }, [timer.showTimer])

    useEffect(()=>{ 
        const timerCounter = setInterval(()=>{
            setActiveTimerCount(x => x - 1)
        }, 1000)

        setTimeout(()=>{
            clearInterval(timerCounter)
            timer.setShowTimer(false)
        }, timerInterval * 1000)
    }, [timerInterval])

    return (
        <div className={`timer ${!timer.showTimer ? "hide" : ""}`}>
            <div className="timer-container">
                <h2>Time Out :(</h2>
                <h2>{activeTimerCount}</h2>
            </div>                
        </div>
    )
}

export default Timer