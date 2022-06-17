import React, {useState, createContext} from "react";

export const TimerContext = createContext();

const TimerProvider = (props) => {
    const [showTimer, setShowTimer] = useState(false);

    return (
        <TimerContext.Provider value={{
            showTimer: showTimer,
            setShowTimer: setShowTimer
        }}>
            {props.children}
        </TimerContext.Provider>
    )
}

export default TimerProvider