import { useEffect, useState } from "react"




const Stopwatch = () => {
    const [time, setTime] = useState(0)
    const [isRunning, setIsRunning] = useState(0)

    useEffect(() => {
        let intervalid
        if (isRunning) {
            intervalid = setInterval(() => setTime(time + 1), 10)
        }
        return () => clearInterval(intervalid)
    }, [isRunning, time])

    const hours = Math.floor(time / 360000)

    const minutes = Math.floor((time % 360000) / 6000)

    const seconds = Math.floor((time % 6000) / 100)

    const milliseconds = time % 100;

    const startAndStop = () => {
        setIsRunning(!isRunning)
    }

    const reset = () => {
        setTime(0)
    }
    return (
        <>
            <div className="stopwatch-container">
                <p className="stopwatch-time">
                    {hours}:{minutes.toString().padStart(2, 0)}
                    {seconds.toString().padStart(2, 0)}
                    {milliseconds.toString().padStart(2, 0)}
                </p>
                <div className="stopwatch-buttons">
                    <button className="stopwatch-button" onClick={startAndStop}>{isRunning ? "stop" : "start"}</button>
                    <button className="stopwatch-button" onClick={reset}>Reset</button>
                </div>

            </div>




        </>

    )
}

export default Stopwatch