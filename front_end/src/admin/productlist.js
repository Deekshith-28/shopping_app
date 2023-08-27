import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import swal from "sweetalert"

const Myproduct = () => {
    let [productlist, updateProduct] = useState([])
    const getProduct = () => {
        let url = `https://shopping-app-tcbd-mri8dqsbk-deekshith-28.vercel.app/product`
        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                updateProduct(data)
            })
    }

    useEffect(() => {
        getProduct()
    }, [])

    const del = (id, name) => {
        let url = `https://shopping-app-tcbd-mri8dqsbk-deekshith-28.vercel.app/product/${id}`
        fetch(url, {
            method: "DELETE",
            headers: {
                'Authorization': localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(data => {
                swal(name + "", "deleted Sucessfully !", "success")
                getProduct()//to clear all details
            })
    }
    return (

        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-12">
                    <h1>Myproduct List:{productlist.length}</h1>
                </div>
                <table>
                    <thead >
                        <tr>
                            <th>Product Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Details</th>
                            <th>Photo</th>
                            <th className="text-center">Action</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productlist.map((ele, ind) => {
                                return (
                                    <tr key={ind}>
                                        <td>{ele._id}</td>
                                        <td>{ele.name}</td>
                                        <td> {ele.price}</td>
                                        <td>{ele.details}</td>
                                        <td> <img src={ele.photo} height="40" width="70" /></td>
                                        <td className="text-center">
                                            <i className="fa fa-trash fa-lg text-danger" onClick={del.bind(this, ele._id, ele.name)}></i>
                                        </td>
                                        <td><Link to={`/editproduct/${ele._id}`}>Edit</Link></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Myproduct