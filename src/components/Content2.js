
//Link ytb: https://www.youtube.com/watch?v=hjIxfXKmkjk&list
//Bài React useEffect hook chi tiết cho người mới

import { useEffect, useState } from "react"

export default function Content2() {
    const [title, setTitle] = useState('');

    // Khi dùng useEffect nó sẽ gọi callback sau khi component thêm element vào DOM (render ra rồi mới gọi tới)
    // useEffect sẽ ưu tiên render giao diện người dùng trước khi xử lý gọi hàm callback (side effect)

    // useEffect(callback) sẽ được gọi lại mỗi khi component re-render (ít được sử dụng)
    useEffect(() => {
        console.log('useEffect(callback)')
    });

    // useEffect(callback, []) sẽ được gọi 1 lần duy nhất khi component mounted (hay dùng)
    useEffect(() => {
        console.log('useEffect(callback, [])');
    }, []);

    // useEffect(callback, [dependency]) sẽ được gọi lại mỗi khi những biến dependency thay đổi (hay dùng)
    useEffect(() => {
        document.title = title;
        console.log('title change');
    }, [title]);

    return (
        <div>
            <h1>Content 2</h1>
            <input
                // set value={title} sẽ tạo ra Two-way binding 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            {console.log('render')}
        </div>
    )
}
