import React from 'react'

const Footer = () => {
  return (
     
          <footer className="bg-dark text-light">
              <div className="container">
                  <div className="row py-5">
                      <div className="col-md-3">
                          <h5>About Us</h5>
                          <p>Information about your company.</p>
                      </div>
                      <div className="col-md-3">
                          <h5>Customer Service</h5>
                          <ul className="list-unstyled">
                              <li><a href="#">Contact Us</a></li>
                              <li><a href="#">FAQ</a></li>
                              <li><a href="#">Shipping</a></li>
                          </ul>
                      </div>
                      <div className="col-md-3">
                          <h5>Categories</h5>
                          <ul className="list-unstyled">
                              <li><a href="#">Electronics</a></li>
                              <li><a href="#">Clothing</a></li>
                              <li><a href="#">Home &amp; Furniture</a></li>
                          </ul>
                      </div>
                      <div className="col-md-3">
                          <h5>Follow Us</h5>
                          <ul className="list-unstyled">
                              <li><a href="#"><i className="fab fa-facebook"></i> Facebook</a></li>
                              <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
                              <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div className="bg-secondary text-center py-3">
                  <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
              </div>
          </footer>
  )
}

export default Footer
