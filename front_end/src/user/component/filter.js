import React, { useState, useEffect } from 'react'

const Filter = ({ page }) => {
    let [priceF, setPriceF] = useState("")

    const filterData = () => {
        let obj = { priceF }

        let url = "https://shopping-app-tcbd.vercel.app/product/filter"
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                'Authorization': localStorage.getItem("token")
            },
            body: JSON.stringify(obj)
        })
            .then(res => res.json())
            .then(item => {
                page(item)

            })
    }
    useEffect(() => {
        filterData()
    }, [priceF])
    return (


        <select className="form-select bg-secondary text-light" onChange={(e) => setPriceF(e.target.value)}>
            <option value="">Price filter...<p></p> </option>
            <option value="high">High - Low</option>
            <option value="low">Low - High</option>

        </select>

    )
}

export default Filter
