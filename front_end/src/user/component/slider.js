import React from 'react'

const Slider = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide bg-warning mt-5">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <div className="row">
                                <div class="col-md-7 mt-5 ps-5">
                                    <h2>50% off your inaugural purchase. Limited-time offer!</h2>
                                    <p>Experience the thrill of shopping with our exclusive 50% off deal for your first order. Don't miss out on this amazing opportunity to save on your favorite products.</p>
                                </div>
                                <div class="col-md-5">
                                    <img class="d-block" src="https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/2.png" alt="First slide" height="350px"/>
                                </div>
                            </div>
                    </div>
                    <div class="carousel-item">
                    <div className="row">
                                <div class="col-md-7 mt-5 ps-5">
                                    <h2>Unleash Your Style with a 50% Discount!</h2>
                                    <p>Upgrade your wardrobe with the latest fashion trends and enjoy a whopping 50% off on your very first order. Elevate your style game without breaking the bank.</p>
                                </div>
                                <div class="col-md-5">
                                    <img class="d-block" src="https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/thumbnail.png" alt="second slide" height="350px"/>
                                </div>
                            </div>
                    </div>
                    <div class="carousel-item">
                    <div className="row">
                                <div class="col-md-7 mt-5 ps-5">
                                    <h2>Your Culinary Adventure Awaits!</h2>
                                    <p>Embark on a gastronomic journey with our special 50% off deal on your first meal order. Savor the flavors and experience exquisite dining from the comfort of your home.</p>
                                </div>
                                <div class="col-md-5">
                                    <img class="d-block" src="https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/1.png" alt="third slide" height="350px" />
                                </div>
                            </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            {/* <div id="carouselExampleIndicators" className="carousel slide mt-5 bg-danger " >
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner text-center p-3 container ">
                        <div className="carousel-item active banner">
                            <div className="row">
                                <div class="col-md-7 mt-5">
                                    <h2>50% off your inaugural purchase. Limited-time offer!</h2>
                                    <p>Experience the thrill of shopping with our exclusive 50% off deal for your first order. Don't miss out on this amazing opportunity to save on your favorite products.</p>
                                </div>
                                <div class="col-md-5">
                                    <img class="d-block" src="https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/2.png" alt="First slide" />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <div className="row">
                                <div class="col-md-7 mt-5">
                                    <h2>Unleash Your Style with a 50% Discount!</h2>
                                    <p>Upgrade your wardrobe with the latest fashion trends and enjoy a whopping 50% off on your very first order. Elevate your style game without breaking the bank.</p>
                                </div>
                                <div class="col-md-5">
                                    <img class="d-block" src="https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/thumbnail.png" alt="second slide" />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div class="col-md-7 mt-5">
                                    <h2>Your Culinary Adventure Awaits!</h2>
                                    <p>Embark on a gastronomic journey with our special 50% off deal on your first meal order. Savor the flavors and experience exquisite dining from the comfort of your home.</p>
                                </div>
                                <div class="col-md-5">
                                    <img class="d-block" src="https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/3.png" alt="third slide" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>


                </div> */}
        </div>


    )
}

export default Slider
