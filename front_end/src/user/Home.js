import { useState, useEffect } from "react"
import swal from "sweetalert"
import ReactPaginate from 'react-paginate';
import Footer from "./component/footer";
import Filter from "./component/filter";
import Search from "./component/search";
import Slider from "./component/slider"
import { useNavigate } from "react-router-dom";
import { Usecart } from "./component/cartNotify";
import Loader from "./component/loader";
import UserHeader from "./UseHeader";

const Myhome = () => {
    let [productlist, updateProduct] = useState([])
    let [loading, setloading] = useState(true)
    let Navigate = useNavigate()
    let { setCart } = Usecart()

    // Fetch products 

    const getProduct = () => {
        let url = `https://shopping-app-tcbd.vercel.app/product`
        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(data => {
                updateProduct(data)
                setloading(false)
            })
    }

    const getCartProduct = () => {

        let url = `https://shopping-app-tcbd.vercel.app/cart/${localStorage.getItem("userid")}`
        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data != null) {
                    setCart(data.items.length)
                }
            })
    }

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            Navigate("/Login")
        }
        getProduct()
        getCartProduct()
    }, [])

    const addtocart = (iteminfo) => {
        iteminfo["qty"] = 1
        iteminfo["userID"] = localStorage.getItem("userid")

        let url = `https://shopping-app-tcbd.vercel.app/cart/add`
        fetch(url, {
            headers: {
                "Content-Type": "application/json",
                'Authorization': localStorage.getItem("token")
            },
            method: "POST",
            body: JSON.stringify(iteminfo)
        })
            .then(res => res.json())
            .then(data => {

                if (data.message == "Item Added Sucessfully") {
                    swal(iteminfo.name + "", "Item Added Sucessfully !", "success")
                    getCartProduct()
                } else {
                    swal(iteminfo.name + "", "Item Already present in Cart !", "warning")
                }
            })


    }

    //pagination start
    const PER_PAGE = 16;
    const [currentPage, setCurrentPage] = useState(0);
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage)
    }
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(productlist.length / PER_PAGE);

    return (

        <div style={{
            background: 'linear-gradient(152deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)'
        }}>
            <UserHeader></UserHeader>
            {loading ? <Loader></Loader> :
                <div>
                    <Slider></Slider>
                    <section className="container mt-5 mb-5">

                        <div className="row mb-4">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-8">
                                <Search product={updateProduct} ></Search>
                            </div>
                            <div className="col-lg-2 ">
                                <Filter page={updateProduct}></Filter>
                            </div>
                        </div>

                        <div className="row">
                            {
                                productlist.slice(offset, offset + PER_PAGE).map((ele, ind) => {

                                    return (
                                        <div className="col-lg-3 col-md-6 col-sm-6 mb-2 mt-2 " key={ind}>
                                            <div className="p-4 myitem p-3 mb-2 bg-light rounded">
                                                <img src={ele.photo} height="130" width="100%" />
                                                <h4 className="text-center">{ele.name}</h4>
                                                <p className="mt-3 mb-3 text-center">RS.{ele.price}</p>
                                                <p className="mt-3 mb-3 text-center">{ele.details.slice(0, 15)}</p>
                                                <p className=" mt-3 mb-3 text-center">
                                                    <button className="btn btn-warning btn-sm" onClick={addtocart.bind(this, ele)}>
                                                        <i className="fa fa-shopping-cart"></i>Add to cart
                                                    </button>
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="mb-4 mt-4">
                            <ReactPaginate
                                previousLabel={"Previous"}
                                nextLabel={"Next"}
                                breakLabel={"..."}
                                pageCount={pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={3}
                                onPageChange={handlePageClick}
                                containerClassName={"pagination  justify-content-center"}
                                pageClassName={"page-item "}
                                pageLinkClassName={"page-link"}
                                previousClassName={"page-item"}
                                previousLinkClassName={"page-link"}
                                nextClassName={"page-item"}
                                nextLinkClassName={"page-link"}
                                breakClassName={"page-item"}
                                breakLinkClassName={"page-link"}
                                activeClassName={"active primary"}
                            />
                        </div>
                    </section>
                    <Footer></Footer>
                </div>
            }
        </div >

    )
}
export default Myhome