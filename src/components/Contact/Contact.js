import React from 'react'
import "./contact.css"

function Contact() {
  return (
    <div>
          <section className="contact" id="contact">
        <div className="container">
            <div className="row">
                 <a href="#" className="navbar-brand d-flex " >
                <img src="/images/logo.png" alt="" width="50" height="50" className="mx-1" />
                <h4>Elites Interior</h4>
            </a>

                <div className="col-lg-3">
                    <h3>Head Office</h3>
                    <p>10 Allen Avenue Ikeja lagos</p>
                    <h3>Branch Office</h3>
                    <p>apple junction Gwagwalada Abuja</p>
                </div>
                <div className="col-lg-3 ">
                    <h3>Contact Us</h3>
                    <li><i className="fa fa-phone"><a href="#">+234 903 710 9764</a></i></li>
                    <li><i className="fa fa-mail-bulk"><a href="#">Dehome@gmail.com</a></i></li>
                    <li className="icons">
                        <a href=""><i className="fab fa-facebook"></i></a>
                        <a href=""><i className="fab fa-twitter"></i></a>
                        <a href=""><i className="fab fa-instagram"></i></a>
                        <a href=""><i className="fab fa-linkedin"></i></a>

                    </li>
                </div>
                <div className="col-lg-3 ">
                    <h3>Elites Interior</h3>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Meet our team</a></li>
                    <li><a href="#">Join Us</a></li>
                    <li><a href="#">Refer and Earn</a></li>
                    <li><a href="#">Disclaimer</a></li>

                </div>
                <div className="col-lg-3 ">
                    <h3>Customer support</h3>

                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#">customer care</a></li>
                    <li><a href="#">Enquiry</a></li>
                    <li><a href="#">Book a virtual meeting</a></li>

                </div>
            </div>
        </div>
    </section>

 <footer>
    <div className="text-center mt-3">
        <p>Copyright <a href="#">Chukwu Raphael</a> 2023</p>
    </div>
 </footer>
    </div>
  )
}

export default Contact
