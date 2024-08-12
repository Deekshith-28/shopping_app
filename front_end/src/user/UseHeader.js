import { Link } from "react-router-dom"
import { Usecart } from "./component/cartNotify"
import "./UserHeader.css"

const UserHeader = () => {
    let { cart } = Usecart()

    return (
        <div>
            <nav className="bg-light p-2 sticky-top shadow navbar">
                <div className="container mt-3">
                    <div className="row">
                        <h3 className="text-danger"><Link to="/"> <i className="fa fa-shopping-bag"></i>Shopping App</Link></h3>
                    </div>
                    <div className="col-lg-8 col-12 text-end first">
                        <div className="pt-1">
                            <Link className="ps-5 text-decoration-none" to="/" ><i className="fa fa-home"></i>Home</Link>
                            <Link className="ps-5 text-decoration-none" to="/cart" ><i className="fa fa-shopping-cart"></i>My cart <span className="border mb-2 bg-warning rounded p-1 text-black">{cart}</span> </Link>
                            <Link className="ps-5 text-decoration-none" to="/Register" ><i className="fa fa-user-plus"></i>Register</Link>
                            <Link className="ps-5 text-decoration-none" to="/Login" ><i className="fa fa-lock"></i>Login</Link>
                            <button className="btn btn-warning text-primary ms-3" onClick={logout}>Logout<i className="fa fa-power-off text-danger " onClick={logout}></i></button>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12 text-end bg-light p-2 shadow navbar fixed-bottom  second">
                        <div className="pt-1 d-flex justify-content-around bg-light">

                            <Link className="ps-5 text-decoration-none" to="/cart" ><i className="fa fa-shopping-cart"></i>My cart <span className="border mb-2 bg-warning rounded p-1 text-black">{cart}</span> </Link>
                            <Link className="ps-5 text-decoration-none" to="/Register" ><i className="fa fa-user-plus"></i>Register</Link>
                            <Link className="ps-5 text-decoration-none" to="/Login" ><i className="fa fa-lock"></i>Login</Link>
                            <button className="btn btn-warning text-primary ms-3" onClick={logout}>Logout<i className="fa fa-power-off text-danger " onClick={logout}></i></button>
                        </div>
                    </div>
                </div>

            </nav>
            





        </div>

    )
}
export default UserHeader

const logout = () => {
    localStorage.clear()
    window.location.reload()
}