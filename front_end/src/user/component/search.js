import React, { useState, useEffect } from 'react'

const Search = ({product}) => {
    let [value, setValue] = useState("")
    
    const getItem = () => {
        let url = "http://localhost:1234/product/search"
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                'Authorization': localStorage.getItem("token")
            },
            body: JSON.stringify({ value })
        })
            .then(res => res.json())
            .then(item => {
                product(item)
            })
    }
    useEffect(() => {
        getItem()
    }, [value])

   

    return (
            <input type="text" className="form-control " placeholder="search..." onChange={(e) => setValue(e.target.value)} />
    )
}

export default Search
