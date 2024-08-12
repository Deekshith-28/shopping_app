import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import swal from "sweetalert";

const Newaccount = () => {
    let [fullname, setFullname] = useState("")
    let [emialid, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [message, setMessage] = useState("")
    let nav = useNavigate()

    const save = () => {
        if (fullname == "" || emialid == "" || password == "") {
            setMessage("Invalid Input !....")
        } else {
            setMessage("please wait processing ....")
            let url = "https://shopping-app-tcbd.vercel.app/user/register"
            let userinfo = { name: fullname, email: emialid, password: password }
            fetch(url, {
                headers: { 'Content-Type': 'Application/json' },
                method: "POST",
                body: JSON.stringify(userinfo)
            })
                .then(res => res.json())
                .then(data => {
                    setMessage(data.message)
                    // swal("Verify", "Please Verify your e-mail !..", "info")
                    nav("/Login")
                })
            setFullname(""); setEmail(""); setPassword("")
        }
    }


    return (

        <div className="container mt-5 ">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <div className="p-4 shadow-lg " style={{
                        background: 'linear-gradient(152deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)'
                    }}>
                        <h3 className="text-center text-primary"> <i className="fa fa-user-plus"></i>Create New Account</h3>
                        <p className="text-center text-info">{message}</p>
                        <i className="text-danger">*Marker filds are mandatory!</i>
                        <hr />
                        <div className="mb-4">
                            <label for="text" className="form-label">Enter Name <i className="text-danger">*</i></label>
                            <input type="text" className="form-control" id="name" placeholder="Enter name" onChange={(e) => setFullname(e.target.value)} value={fullname} />
                        </div>
                        <div className="mb-4">
                            <label>e-mail Id <i className="text-danger">*</i></label>
                            <input type="text" className="form-control" placeholder="Enter Email-ID" id="email" onChange={(e) => setEmail(e.target.value)} value={emialid} />
                        </div>
                        <div className="mb-4">
                            <label>Password <i className="text-danger">*</i></label>
                            <input type="password" className="form-control" placeholder="Enter Password" id="passoward" onChange={(e) => setPassword(e.target.value)} value={password} />
                        </div>
                        <div className="text-center">
                            <button className="btn btn-primary w-100" onClick={save}>
                                Register <i className="fa fa-arrow-right"></i>
                            </button>
                            <p className="mt-3"> Already have account  <Link to="/Login">login</Link></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
export default Newaccount