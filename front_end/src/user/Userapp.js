import { HashRouter, Routes, Route } from "react-router-dom";
import Myhome from "./Home";
import Mylogin from "./Login";
import Newaccount from "./Register";

import Cart from "./cart";


const Userapp = () => {
    return (
        <HashRouter>
           
            <Routes>
                <Route exact path="/" element={<Myhome></Myhome>}></Route>
                <Route exact path="/Register" element={<Newaccount></Newaccount>}></Route>
                <Route  path="/Login" element={<Mylogin></Mylogin>}></Route>
                <Route path="/cart" element={<Cart></Cart>}></Route>
            </Routes>
        </HashRouter>
    )
}
export default Userapp