import React from 'react'

const Slider = () => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide bg-light mt-5" data-ride="carousel">
            <div className="carousel-inner text-center p-3 container ">
                <div className="carousel-item active banner">
                    <div className="row">   
                        <div class="col-md-7 mt-5">
                            <h2>50% off your inaugural purchase. Limited-time offer!</h2>
                            <p>Experience the thrill of shopping with our exclusive 50% off deal for your first order. Don't miss out on this amazing opportunity to save on your favorite products.</p>
                        </div>
                        <div class="col-md-5">
                            <img class="d-block" src="https://i.dummyjson.com/data/products/6/4.jpg" alt="First slide" />
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row">
                        <div class="col-md-7 mt-5">
                            <h2>Unleash Your Style with a 50% Discount!</h2>
                            <p>Upgrade your wardrobe with the latest fashion trends and enjoy a whopping 50% off on your very first order. Elevate your style game without breaking the bank.</p>
                        </div>
                        <div class="col-md-5">
                            <img class="d-block" src="https://i.dummyjson.com/data/products/6/thumbnail.png" alt="second slide" />
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
                            <img class="d-block" src="https://i.dummyjson.com/data/products/8/thumbnail.jpg" alt="third slide" />
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Slider
