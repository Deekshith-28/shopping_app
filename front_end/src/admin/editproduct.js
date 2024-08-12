import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import swal from 'sweetalert'
const Editproduct = () => {
    let { id } = useParams()
    let [pname, pickname] = useState("")
    let [pprice, pickPrice] = useState("")
    let [pphoto, pickPhoto] = useState("")
    let [pdetails, pickDetails] = useState("")

    const getproduct = () => {

        let url = "https://shopping-app-tcbd.vercel.app/product/" + id
        fetch(url, {
            method: "GET",
            headers: {
                'Authorization': localStorage.getItem("token")
            },
        })
            .then(res => res.json())
            .then(data => {
                pickname(data.name)
                pickPrice(data.price)
                pickPhoto(data.photo)
                pickDetails(data.details)
            })
    }

    useEffect(() => {
        getproduct()
    }, [])

    const edit = () => {
        let url = "https://shopping-app-tcbd.vercel.app/product/" + id
        let productinfo = { name: pname, price: pprice, details: pdetails, photo: pphoto }
        fetch(url, {
            method: "PATCH",
            headers: {
                "content-Type": "application/json",
                'Authorization': localStorage.getItem("token")
            },
            body: JSON.stringify(productinfo)
        })
            .then(res => res.json())
            .then(data => {
                swal(" Updated", "Sucessfully done", "success")
                window.history.back()
            })
    }
    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h3 className="">Edit Product</h3>
                    </div>
                    <div className="col-lg-3">
                        <label>Enter product Name</label>
                        <input type="text" className="form-control" onChange={(e) => pickname(e.target.value)} value={pname} />

                    </div>
                    <div className="col-lg-3">
                        <label>Enter product Price</label>
                        <input type="text" className="form-control" onChange={(e) => pickPrice(e.target.value)} value={pprice} />

                    </div>
                    <div className="col-lg-6">
                        <label>Enter Photo URL</label>
                        <input type="text" className="form-control" onChange={(e) => pickPhoto(e.target.value)} value={pphoto} />

                    </div>
                    <div className="col-lg-12 mt-4">
                        <label>Enter Product details</label>
                        <textarea className="form-control" onChange={(e) => pickDetails(e.target.value)} value={pdetails}></textarea>

                    </div>
                    <div className="col-lg-12 mt-4 text-center">
                        <button className="btn btn-primary m-2" onClick={edit}>Edit</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Editproduct
