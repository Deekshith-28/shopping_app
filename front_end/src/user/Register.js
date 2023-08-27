import { useState } from "react"
import { useNavigate } from "react-router-dom"

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
            let url = "https://shopping-app-tcbd-mri8dqsbk-deekshith-28.vercel.app/user/register"
            let userinfo = { name: fullname, email: emialid, password: password }
            fetch(url, {
                headers: { 'Content-Type': 'Application/json' },
                method: "POST",
                body: JSON.stringify(userinfo)
            })
                .then(res => res.json())
                .then(data => {
                    setMessage(`Register sucessfully`)
                    nav("/Login")
                })
            setFullname(""); setEmail(""); setPassword("")
        }
    }


    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <div className="p-4 shadow-lg">
                        <h3 className="text-center text-primary"> <i className="fa fa-user-plus"></i>Create New Account</h3>
                        <p className="text-center text-info">{message}</p>
                        <i className="text-danger">*Marker filds are mandatory!</i>
                        <hr />
                        <div className="mb-4">
                            <label>Enter Name <i className="text-danger">*</i></label>
                            <input type="text" className="form-control" placeholder="Enter name" onChange={(e) => setFullname(e.target.value)} value={fullname} />
                        </div>
                        <div className="mb-4">
                            <label>e-mail Id <i className="text-danger">*</i></label>
                            <input type="text" className="form-control" placeholder="Enter Email-ID" onChange={(e) => setEmail(e.target.value)} value={emialid} />
                        </div>
                        <div className="mb-4">
                            <label>Password <i className="text-danger">*</i></label>
                            <input type="password" className="form-control" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                        </div>
                        <div className="text-center">
                            <button className="btn btn-danger" onClick={save}>
                                Register <i className="fa fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Newaccount