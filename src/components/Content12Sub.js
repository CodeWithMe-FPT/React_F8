// Bài useCallback() hook
// Link ytb: https://www.youtube.com/watch?v=_aiLvBnYwnA

import { memo } from "react"

function Content12_sub({ handleClick }) {
    console.log("re-render");
    return (
        <button onClick={handleClick}>Click me!!!</button>
    )
}
// export default Content12_sub;
export default memo(Content12_sub);