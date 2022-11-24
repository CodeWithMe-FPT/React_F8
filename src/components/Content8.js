// Bài useEffect() with preview avatar
// Link ytb: https://www.youtube.com/watch?v=Fnb3GbY9FUY

import { useState, useEffect } from "react"

export default function Content8() {

    // Callback luôn được gọi mỗi khi component mounted
    // Cleanup function luôn được gọi trước khi component unmounted
    // Cleanup function luôn được gọi trước khi callback được gọi (trừ lần component mounted)

    const [count, setCount] = useState(1);

    useEffect(() => {
        console.log(`Mounted or re-render lần ${count}`);

        // Cleanup function
        return () => {
            console.log(`Cleanup lần ${count}`)
        }
    }, [count])

    return (
        <>
            <h1>Content8</h1>
            <h1>{count}</h1>
            <button
                onClick={() => { setCount(count + 1) }}
            >CLick me</button>
        </>
    )
}
