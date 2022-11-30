// Bài useRef() hook
// Link ytb: https://www.youtube.com/watch?v=qr1dQqRJRNo

import { useEffect, useRef, useState } from "react"


export default function Content11() {

    const [time, setTime] = useState(5);
    const myInterval = useRef();
    const prevTime = useRef(5);

    useEffect(() => {
        prevTime.current = time;
    }, [time])

    const handleStart = () => {

        if (myInterval.current) {
            return;
        } else {
            if (time === 0) {
                setTime(5);
            }
        }
        myInterval.current = setInterval(() => {
            setTime(prev => {
                if (prev === 1) {
                    clearInterval(myInterval.current)
                    console.log('clear interval ' + myInterval.current + ' inside interval')
                    myInterval.current = undefined;
                }
                return prev - 1;
            })
        }, 1000)
        console.log('create interval ' + myInterval.current)

    }

    const handleStop = () => {

        if (myInterval.current) {
            clearInterval(myInterval.current);
            console.log('clear interval ' + myInterval.current + ' in handle stop')
            myInterval.current = undefined;
        }

    }

    console.log(prevTime.current + " " + time);

    return (
        <>
            <h1>Đồng hồ đếm ngược</h1>
            <h1>{time}</h1>
            <div style={{ display: "flex" }}>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
            </div>
            {time === 0 && <h1>Đã hết giờ đếm ngược!!!</h1>}
        </>
    )
}