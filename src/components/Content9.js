// Bài useEffect() with preview avatar
// Link ytb: https://www.youtube.com/watch?v=Fnb3GbY9FUY

import { useEffect, useState } from "react"


export default function Content9() {

    const [image, setImage] = useState("");
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        setImage(URL.createObjectURL(file));
    }

    //Khi ảnh thay đổi thì sẽ remove link của ảnh cũ đi
    useEffect(() => {

        //Cleanup function
        return () => {
            URL.revokeObjectURL(image);
            console.log('remove image link');
        }
    }, [image])

    return (
        <div>
            <input
                type={"file"}
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
                onChange={handlePreviewAvatar}
            />
            {image && <img src={image} alt=""></img>}
        </div>
    )
}
