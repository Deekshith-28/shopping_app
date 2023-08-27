import { HashRouter, Route, Routes } from "react-router-dom";
import Adminheader from "./adminheader";
import Mydashboard from "./dashboard";
import Myorder from "./orderlist"
import Newproduct from "./newproduct"
import Myproduct from "./productlist";
import Editproduct from "./editproduct";

const AdminApp = () => {
    return (
        <HashRouter>
            <Adminheader></Adminheader>
            <Routes>
                <Route path="/" element={<Mydashboard></Mydashboard>}></Route>
                <Route path="/orderlist" element={<Myorder></Myorder>}></Route>
                <Route path="/newproduct" element={<Newproduct></Newproduct>}></Route>
                <Route path="/productlist" element={<Myproduct></Myproduct>}></Route>
                <Route path="/editproduct/:id" element={<Editproduct></Editproduct>}></Route>
                
                
            </Routes>
         
           
        </HashRouter>
    )
}
export default AdminApp