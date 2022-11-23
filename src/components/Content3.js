//Link ytb: https://www.youtube.com/watch?v=hjIxfXKmkjk&list
//Bài React useEffect hook chi tiết cho người mới

import { useEffect, useState } from "react";


export default function Content3() {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([])

    // Trường hợp này nếu dùng useEffect(callback) thì sẽ tạo ra fetch vô hạn bởi vì khi component render
    // thì callback sẽ được gọi tới và sẽ gọi setPosts, khi setPosts thì component sẽ lại re-render
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => res.json())
    //         .then(posts => {
    //             setPosts(posts);
    //         })
    // })

    // Trường hợp có sử dụng hàm set value thì nên dùng useEffect(callback, []) hoặc useEffect(callback, [dependency])
    // Ở đây do không dùng đến value posts nên dùng useEffect(callback, []) là được rồi 
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
                console.log('fetch api success')
            })
            .catch(e => console.log(e.message));
    }, []);

    useEffect(() => {
        document.title = title;
        console.log('title change');
    }, [title]);


    return (

        <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 style={{ paddingBottom: 15 }}>Content 3</h1>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => {
                    return <li key={post.id}>{post.title}</li>
                })}
            </ul>
        </div>

    )
}
