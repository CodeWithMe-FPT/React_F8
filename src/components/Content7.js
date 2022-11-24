// Bài useEffect() with timer functions
// Link ytb: https://www.youtube.com/watch?v=zGNOhVjrWFw

import { useState } from "react"


export default function Content7() {

    const [time, setTime] = useState(10);

    useState(() => {
        const myInterval = setInterval(() => {
            setTime(prev => {
                if (prev === 0) {
                    clearInterval(myInterval);
                    return prev;
                }
                return prev - 1;
            })
        }, 1000)

        return () => {
            clearInterval(myInterval);
        }
    }, []);

    return (
        <>
            <h1>Đồng hồ đếm ngược</h1>
            <h1>{time}</h1>
            {time == 0 && <h1>Đã hết giờ đếm ngược!!!</h1>}
        </>
    )
}
