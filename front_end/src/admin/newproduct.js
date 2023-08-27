import { useState } from "react"
import swal from "sweetalert"
const Newproduct = () => {
    let [pname, pickname] = useState("")
    let [nameError, updateNameError] = useState("")

    let [pprice, pickPrice] = useState("")
    let [priceError, updatePriceError] = useState("")

    let [pphoto, pickPhoto] = useState("")
    let [photoError, updatePhotoError] = useState("")

    let [pdetails, pickDetails] = useState("")
    let [detailsError, updateDetailsError] = useState("")

    const save = () => {
        let formStatus = true
        if (pname.trim() == "") {
            formStatus = false
            updateNameError("Invalid product name!")
        } else {
            updateNameError("")
        }

        // price Validation 
        if (pprice.trim() == "" || isNaN(pprice) || pprice == 0) {
            formStatus = false
            updatePriceError("Invalid product price!")
        } else {
            updatePriceError("")
        }

        // url validation 
        if (pphoto.trim() == "") {
            formStatus = false
            updatePhotoError("Invalid Product Photo Url!")
        } else {
            updatePhotoError("")
        }

        // details valdation 
        if (pdetails.trim() == "") {
            formStatus = false
            updateDetailsError("Invalid product name!")
        } else {
            updateDetailsError("")
        }



        if (formStatus == false) {
            swal("Invaild Input", "Please Enter Product", "warning")
        } else {
            let url = "https://shopping-app-tcbd-mri8dqsbk-deekshith-28.vercel.app/product"
            let productinfo = { name: pname, price: pprice, details: pdetails, photo: pphoto }

            fetch(url, {
                headers: {
                    "content-Type": "application/json",
                    'Authorization': localStorage.getItem("token")
                },
                method: "POST",
                body: JSON.stringify(productinfo)
            })
                .then(res => res.json())
                .then(data => {
                    swal(pname + "", "Save Sucessfully !", "success")
                    clearAll()//to clear all details
                })
        }
    }

    const clearAll = () => {
        updateNameError("")
        updatePriceError("")
        updatePhotoError("")
        updateDetailsError("")
        pickname("")
        pickPhoto("")
        pickPrice("")
        pickDetails("")

    }
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h3 className="">Add Product to inventory</h3>
                </div>
                <div className="col-lg-3">
                    <label>Enter product Name</label>
                    <input type="text" className="form-control" onChange={(e) => pickname(e.target.value)} value={pname} />
                    <i className="text-danger">{nameError}</i>
                </div>
                <div className="col-lg-3">
                    <label>Enter product Price</label>
                    <input type="text" className="form-control" onChange={(e) => pickPrice(e.target.value)} value={pprice} />
                    <i className="text-danger">{priceError}</i>
                </div>
                <div className="col-lg-6">
                    <label>Enter Photo URL</label>
                    <input type="text" className="form-control" onChange={(e) => pickPhoto(e.target.value)} value={pphoto} />
                    <i className="text-danger">{photoError}</i>
                </div>
                <div className="col-lg-12 mt-4">
                    <label>Enter Product details</label>
                    <textarea className="form-control" onChange={(e) => pickDetails(e.target.value)} value={pdetails}></textarea>
                    <i className="text-danger">{detailsError}</i>
                </div>
                <div className="col-lg-12 mt-4 text-center">
                    <button className="btn btn-primary m-2" onClick={save}>Save Product</button>
                    <button className="btn btn-warning m-2" onClick={clearAll}>Clear All</button>
                </div>
            </div>
        </div>
    )
}

export default Newproduct