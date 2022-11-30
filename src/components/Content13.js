// Bài useMemo() hook
//Link ytb: https://www.youtube.com/watch?v=TGaxZyZzB7E

import { useMemo, useState } from 'react'

export default function Content13() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("")
    const [products, setProducts] = useState([])
    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handlePriceChange = (e) => {
        setPrice(e.target.value)
    }

    const handleSubmit = () => {
        setProducts(prevState => {
            return [...prevState, { name, price: +price }]
        })
    }

    // useMemo(): sử dụng khi không muốn thay đổi logic của 1 function (có kết quả trả về) 1 cách không cần  thiết
    const total = useMemo(() => {
        const result = products.reduce((result, prod) => {
            console.log("Tính toán lại");
            return result + prod.price;
        }, 0)
        return result;
    }, [products])

    return (
        <div>
            <input onChange={handleNameChange} value={name} placeholder="Enter name..." />
            <br />
            <input onChange={handlePriceChange} value={price} placeholder="Enter price..." />
            <br />
            <button onClick={handleSubmit}>Add</button>
            <h1>Total: {total}</h1>
            <ul>
                {
                    products.map((product, index) => {
                        return <li key={index}>{`${product.name} - ${product.price}`}</li>
                    })
                }
            </ul>
        </div>
    )
}
