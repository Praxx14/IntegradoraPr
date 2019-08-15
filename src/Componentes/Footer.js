import React, { Component } from "react";
import "../App.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (


        <footer className="site-footer">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-6">
                <h3 className="mb-4">About</h3>
                <ul className="list-unstyled ">
                  <li className="d-flex"><span className="mr-3"><span
                      className="icon ion-ios-location"></span></span><label className=""> Sonora, Col. México Sur Tehuacán</label>
                  </li>
                  <li className="d-flex"><span className="mr-3"><span
                      className="icon ion-ios-telephone"></span></span><span className=""> +52 1 747 101 0642</span></li>
                  <li className="d-flex"><span className="mr-3"><span className="icon ion-email"></span></span><span
                      className=""> pedro.g@blacksyntax.com</span></li>
                </ul>
              </div>
              <div className="col-md-6">
                <h3>Connect</h3>
                <p>
                  <a href="facebook.com" className="p-2"><span className="fa fa-facebook"></span></a>
                  <a href="twitter.com" className="p-2"><span className="fa fa-twitter"></span></a>
                  <a href="instagrem.com" className="p-2"><span className="fa fa-instagram"></span></a>
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-7 text-center">
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script>
                All rights reserved | This site is made with <i className="fa fa-heart-o"
                                                                    aria-hidden="true"></i> by <a
                  href="/Reportes" target="_blank">BlackSyntax</a>
              </div>
            </div>
          </div>
        </footer>
    );
  }
}
export default Footer;
