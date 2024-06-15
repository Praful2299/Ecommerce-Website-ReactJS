import React from 'react';

const Footerji = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h5 className="mb-3">Contact Us</h5>
            <p>Email: Freshspecs@gmail.com</p>
            <p>Phone: 1800-100-200</p>
          </div>
          <div className="col-lg-4 mb-4">
            <h5 className="mb-3">Follow Us</h5>
            <div className="d-flex justify-content-center">
              <a href="#" className="me-3 text-white">
                <i className="bi bi-facebook fs-3"><img src="./src/images/facebook.png" height="25px" width="25px" alt="fb" /></i>
              </a>
              <a href="#" className="me-3 text-white">
                <i className="bi bi-twitter fs-3"><img src="./src/images/instagram.png" height="25px" width="25px" alt="insta" /></i>
              </a>
              <a href="#" className="me-3 text-white">
                <i className="bi bi-instagram fs-3"><img src="./src/images/linkedin.png" height="25px" width="25px" alt="lnkdn" /></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <h5 className="mb-3">Subscribe</h5>
            <form>
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Enter your email" />
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <p>&copy; 2024 Fresh-Specs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footerji;