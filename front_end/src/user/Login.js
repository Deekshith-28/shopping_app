import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import swal from "sweetalert";
const Mylogin = () => {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [message, setMessage] = useState("")
    let navigate = useNavigate()
    const test = () => {

        setEmail("arun@gmail.com")
        setPassword("123")
        setMessage("Login with this For Testing...")
        userCheck();


    }
    const userCheck = () => {
        if (email == "" || password == "") {
            setMessage("Invalid Input !....")
        } else {
            setMessage("please wait processing ....")
            let url = "https://shopping-app-tcbd.vercel.app/user/login";
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
                        localStorage.setItem("isVerify", data.isVerify)
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
                    <section className="p-4 shadow-lg" style={{
                        background: 'linear-gradient(152deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)'
                    }}>
                        <h3 className="text-center text-primary"> <i className="fa fa-lock"></i>Login</h3>
                        <p className="text-center text-info">{message}</p>
                        <i className="text-danger">*Marker filds are mandatory!</i>
                        <hr />
                        <form>
                            <div class="mb-3">
                                <label for="email" class="form-label"> Email address <i className="text-danger">*</i></label>
                                <input type="email" class="form-control" id="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} value={email} />
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password  <i className="text-danger">*</i></label>
                                <input type="password" class="form-control" id="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} value={password} />
                            </div>
                            <button type="submit" class="btn btn-primary w-100" onClick={userCheck} >Login</button>
                        </form>
                        <p className="mt-2 text-center">Login for test <button className="btn btn-warning" onClick={test}>Arun's</button></p>
                        <p className="mt-3 text-center">Don't have account <Link to="/Register">Rigister</Link></p>
                    </section>
                </div>
            </div>
        </div>
    )
}
export default Mylogin