// Bài useCallback() hook
// Link ytb: https://www.youtube.com/watch?v=_aiLvBnYwnA

import { useState, useCallback } from 'react'
import Content12Sub from './Content12Sub';

export default function Content12() {

    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    }, [])

    return (
        <div>
            <h1>React memo và useCallback</h1>
            <h1>{count}</h1>
            <Content12Sub handleClick={handleClick} />
        </div>
    )
}
