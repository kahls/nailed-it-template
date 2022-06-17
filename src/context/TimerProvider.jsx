import React, {useState, createContext} from "react";

export const TimerContext = createContext();

const TimerProvider = (props) => {
    const [timerInterval, setTimerInteral] = useState(0);
    const [showTimer, setShowTimer] = useState(false);

    return (
        <TimerContext.Provider value={{
            showTimer: showTimer,
            timerInterval: timerInterval,
            setShowTimer: setShowTimer
        }}>
            {props.children}
        </TimerContext.Provider>
    )
}

export default TimerProvider