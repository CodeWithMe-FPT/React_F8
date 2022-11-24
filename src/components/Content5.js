// Bài useEffect() with DOM events
// Link ytb: https://www.youtube.com/watch?v=xZcWHaGsKUQ

import { useEffect, useState } from "react";



const tabs = ["posts", "albums", "todos"]
export default function Content4() {

    const [title, setTitle] = useState('');
    const [type, setType] = useState("posts");
    const [posts, setPosts] = useState([]);
    const [showGotoTop, setShowGotoTop] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
                console.log(`fetch ${type} success`);
            })
            .catch(e => console.log(e.message));
    }, [type])

    useEffect(() => {
        document.title = title;
        console.log('title change');
    }, [title]);

    // Dùng useEffect(callback,[]) để addEventListener 1 lần 
    useEffect(() => {
        const handleScroll = () => {
            setShowGotoTop(window.scrollY >= 200);
        }
        window.addEventListener('scroll', handleScroll);

        // Cleanup function
        // Hàm này sẽ được gọi khi component unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
            console.log('remove event scroll')
        }
    }, [])

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h1>Content 4</h1>
            {showGotoTop && <button
                style={{ position: "fixed", right: 50, bottom: 50 }}
                onClick={() => {
                    window.scrollTo(0, 0);
                    setShowGotoTop(false);
                }}
            >Go to top</button>}
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <div style={{ paddingTop: 10 }}>
                {tabs.map(tab => {
                    return <button
                        key={tab}
                        style={type === tab ? { color: "#fff", backgroundColor: "#333", marginRight: 10 } : { marginRight: 10 }}
                        onClick={() => { setType(tab) }}
                    >{tab}</button>
                })}
            </div>
            <ul>
                {posts.map(post => {
                    return <li key={post.id}>{post.title}</li>
                })}
            </ul>
        </div>
    )
}
