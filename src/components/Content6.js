// Bài useEffect() with DOM events
// Link ytb: https://www.youtube.com/watch?v=xZcWHaGsKUQ

import { useEffect, useState } from "react";

import React from 'react'

export default function Content6() {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => { setInnerWidth(window.innerWidth) }
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log('remove envent resize');
        }
    }, [])

    return (
        <h1>{innerWidth}</h1>
    )
}
