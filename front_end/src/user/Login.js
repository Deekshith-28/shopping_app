import { useState } from "react"
import { useNavigate } from "react-router-dom"
const Mylogin = () => {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [message, setMessage] = useState("")
    let navigate = useNavigate()

    const userCheck = () => {
        if (email == "" || password == "") {
            setMessage("Invalid Input !....")
        } else {
            setMessage("please wait processing ....")
            let url = "http://localhost:1234/user/login";
            let data = {
                email: email,
                password: password
            }
            fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {

                    if (data.message == "Login sucessfully") {
                        setMessage(data.message)
                        localStorage.setItem("token", data.token)
                        localStorage.setItem("userid", data.userID)
                        localStorage.setItem("name", data.name)
                        if (localStorage.getItem("name") == "adminDeekshith") {
                            window.location.reload()
                        } else {
                            navigate("/")
                        }

                    } else {
                        setMessage(data.message)
                    }





                })
        }
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <div className="p-4 shadow-lg">
                        <h3 className="text-center text-primary"> <i className="fa fa-lock"></i>Login</h3>
                        <p className="text-center text-info">{message}</p>
                        <i className="text-danger">*Marker filds are mandatory!</i>
                        <hr />

                        <div className="mb-4">
                            <label>e-mailId <i className="text-danger">*</i></label>
                            <input type="text" className="form-control" placeholder="Enter Email-ID" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <label>Password <i className="text-danger">*</i></label>
                            <input type="password" className="form-control" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="text-center">
                            <button className="btn btn-danger" onClick={userCheck}>
                                Login <i className="fa fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Mylogin