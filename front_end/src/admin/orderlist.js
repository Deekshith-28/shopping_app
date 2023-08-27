import { useState, useEffect } from "react";
import swal from "sweetalert";
const Myorder = () => {
    let [productlist, updateProduct] = useState([])

    const getProduct = () => {
        let url = `http://localhost:1234/orders`
        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(data => {
                
                updateProduct(data)
            })
    }

    useEffect(() => {
        getProduct()
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="m-3 text-primary">My orders</h2>

                </div>
                {
                    productlist.map((ele, ind) => {
                        return (
                            <div className="row mb-5 " key={ind}>
                                <h4 className="col-lg-12 text-center text-danger p-2">Order Id :{ele.userID}</h4>
                                <div className="col-lg-8">
                                    <div className="p-3 ">
                                        <table class="table  table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Details</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Photo</th>
                                
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    ele.items.map((ele, ind) => {
                                                        return (
                                                            <tr key={ind}>
                                                                <td>{ele.name}</td>
                                                                <td>{ele.details}</td>
                                                                <td>{ele.price}</td>
                                                                <td>{ele.qty}</td>
                                                                <td><img src={ele.photo} height="50" width="50" /></td>
                                                            </tr>
                                                        )

                                                    })
                                                }
                                                <td className="text-primary text-end" colspan="3"> Amount :{ele.amount}</td>
                                            </tbody>
                                        </table>
                                       
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="p-3 border">
                                        <p>Fullname :{ele.customername}</p>
                                        <p>mobile No :{ele.mobile}</p>
                                        <p>Delivery Address :{ele.address}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Myorder