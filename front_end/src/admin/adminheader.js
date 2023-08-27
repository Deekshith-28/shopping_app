import { Link } from "react-router-dom"
import Mydashboard from "./dashboard"
import Myorder from "./orderlist"
import Newproduct from "./newproduct"
const Adminheader = () => {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-lg-3 ">
                    <h2 className="text-danger">
                        <i className="fa fa-shopping-bag"></i>Shopping Bag
                    </h2>
                </div>
                <div className="col-lg-9 text-end">
                    <div className="btn-group">
                        <Link className="btn btn-primary" to="/" ><i className="fa fa-home"></i>Dashboard</Link>
                        <Link className="btn btn-primary" to="/productlist" ><i className="fa fa-table"></i>My  Inventory</Link>
                        <Link className="btn btn-primary" to="/newproduct" ><i className="fa fa-plus"></i>New Inventory</Link>
                        <Link className="btn btn-primary" to="/orderlist" ><i className="fa fa-headset"></i>My Orders</Link>
                        <button className="btn btn-primary " disabled>Welcome -{localStorage.getItem("name")} </button>
                        <button className="btn btn-warning text-primary" onClick={logout}>Logout<i className="fa fa-power-off text-danger " onClick={logout}></i></button>   
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Adminheader

const logout = () => {
    localStorage.clear()
    window.location.reload()
}