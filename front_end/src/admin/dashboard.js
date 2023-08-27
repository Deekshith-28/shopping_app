import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
const Mydashboard=()=>{
    let [productlist, updateProduct] = useState([])
    let [orderlist, updateOrder] = useState([])
    const getProduct = () => {
        let url = `http://localhost:1234/product`
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


    const getOrder = () => {
        let url = `http://localhost:1234/orders`
        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(data => {

                updateOrder(data)
            })
    }
    useEffect(() => {
        getProduct()
        getOrder()
    }, [])
    return(
        <div className="container mt-4">

            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1 className="text-primary">Dashboard</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-3 text-center">
                    <i className="fa fa-suitcase fa-3x text-warning"></i>
                    <h3 className="text-primary">{productlist.length}-items</h3>
                </div>
                <div className="col-lg-3 text-center">
                    <i className="fa fa-headset fa-3x text-success"></i>
                    <h3 className="text-primary">{orderlist.length} -My Order</h3>
                </div>
                <div className="col-lg-3 text-center">
                    <Link to='/newproduct' className="text-decoration-none">
                    <i className="fa fa-plus fa-3x text-info"></i>
                    <h3 className="text-primary">Add product</h3>
                    </Link>
                </div>
                <div className="col-lg-3 text-center">
                    <Link to='/productlist' className="text-decoration-none">
                    <i className="fa fa-table fa-3x text-secondary"></i>
                    <h3 className="text-primary">product list</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Mydashboard

const logout=()=>{
    localStorage.clear()
    window.location.reload()
}