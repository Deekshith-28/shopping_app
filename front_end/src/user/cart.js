import { useState, useEffect } from "react";
import swal from "sweetalert";
import { useNavigate, Link } from "react-router-dom";
import { Usecart } from "./component/cartNotify";
import Loader from "./component/loader";
import Payment from "./component/payment";

const Cart = () => {
    let Navigate = useNavigate()
    let [productlist, updateProduct] = useState([])
    let [loading, setloading] = useState(true)
    let total = 0
    let [fullname, pickName] = useState("")
    let [mobile, pickMobile] = useState("")
    let [address, pickAddress] = useState("")
    let [message, setMessage] = useState("")
    let { setCart } = Usecart()
 
    // Fetch product  
    const getProduct = () => {

        let url = `http://localhost:1234/cart/${localStorage.getItem("userid")}`
        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data != null) {
                    updateProduct(data.items)
                    setCart(data.items.length)
                    setloading(false)
                }

            })
    }

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            Navigate("/Login")
        }
        getProduct()
    }, [])

  // Delete Item 

    const delitem = (id, name) => {
        let url = `http://localhost:1234/cart/${id}`

        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                'Authorization': localStorage.getItem("token")
            },
            body: JSON.stringify({ userid: localStorage.getItem("userid") })
        })
            .then(res => res.json())
            .then(data => {
                swal(name + "", "deleted from your Cart !", "success")
                getProduct()//to clear all details
            })
    }

    // Update Item Quntity 

    const updateQty = (product, action) => {
        product["userid"] = localStorage.getItem("userid")
        if (action == "A") {
            product["qty"] = product.qty + 1
        } else {
            product["qty"] = product.qty - 1
        }

        if (product.qty == 0) {
            delitem(product._id, product.name)
        } else {
            let url = `http://localhost:1234/cart/${product._id}`
            fetch(url, {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': localStorage.getItem("token")
                },
                method: "PUT",
                body: JSON.stringify(product)
            })
                .then(res => res.json())
                .then(data => {

                    getProduct() //to reload the cart list 
                })
        }

    }

    // place Order 
    
    const placeorder = () => {
        if (fullname == "" || mobile == "" || address == "") {
            setMessage("Invalid input...")
        } else {
            setMessage("")
            let url = `http://localhost:1234/orders`
            let orderdata = { userID: localStorage.getItem("userid"), customername: fullname, mobile: +mobile, address: address, items: productlist, amount: total }

            fetch(url, {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': localStorage.getItem("token")
                },
                method: "POST",
                body: JSON.stringify(orderdata)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.message == "Orderd Sucessfully")
                       Payment(total)
                    pickName("")
                    pickAddress("")
                    pickMobile("")
                })
        }
    }


    return (
        <div className="container mt-5">
            {loading ? <Loader></Loader> :
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="text-primary">{productlist.length} - Item in cart</h2>
                    </div>
                    <div className="col-lg-3">
                        <div className="p-3 shadow">
                            <h3 className="text-center text-primary mb-3">Customer Details</h3>
                            <p className="text-center text-info">{message}</p>
                            <div className="mb-3">
                                <label className="mb-2">Customer Name</label>
                                <input type="text" className="form-control" onChange={(e) => pickName(e.target.value)} value={fullname} />
                            </div>
                            <div className="mb-3">
                                <label className="mb-2">Customer Mobile</label>
                                <input type="number" className="form-control" onChange={(e) => pickMobile(e.target.value)} value={mobile} />
                            </div>
                            <div className="mb-3">
                                <label className="mb-2">Delivery Address</label>
                                <textarea className="form-control" onChange={(e) => pickAddress(e.target.value)} value={address}></textarea>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-primary" onClick={placeorder}>Place Order</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Item Name</th>
                                    <th>Photo</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th className="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    productlist.map((ele, ind) => {
                                        total += ele.price * ele.qty
                                        return (
                                            <tr key={ind}>
                                                <td>{ele.name}</td>
                                                <td><img src={ele.photo} height="50" width="50" /></td>
                                                <td>{ele.price}</td>
                                                <td>
                                                    <button onClick={updateQty.bind(this, ele, "B")}>-</button>
                                                    <span className="p-1">{ele.qty}</span>
                                                    <button onClick={updateQty.bind(this, ele, "A")}>+</button>
                                                </td>
                                                <td>{ele.price * ele.qty}</td>
                                                <td className="text-center">
                                                    <Link> <i className="fa fa-trash text-danger" onClick={delitem.bind(this, ele._id, ele.name)}></i></Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                <tr>
                                    <td colSpan="6" className="text-end">
                                        <b className="text-primary"> Rs. {total} - to Payable Amount</b>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </div>
    )
}
export default Cart