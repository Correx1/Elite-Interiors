import React from 'react'
import Navbar from '../Navbar/Navbar';
import Faq from '../FAQ/Faq';
import Partners from '../Partners/Partners';
import Contact from '../Contact/Contact';
import items from "../Files/db.json"
import { Link } from 'react-router-dom';



function Bedroom() {

  return (
    <div>
      <Navbar />
      <section className="subHero Bedroom">
        <div className="container">
          <div className="row">
            <div class="col-lg-12">
              <div className="main-text d-block">
                <h2>Bedroom Designs</h2>
                <p>
                  The bedroom is a private retreat, a place of rest and
                  reflection. Perfect interior decoration is essential to create
                  a calming and restorative environment. Carefully selected
                  furnishings, soothing color schemes, and personalized decor
                  can transform the bedroom into a haven of comfort, promoting
                  quality sleep and a sense of well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="textContainer mt-3">
        <div className="container">
          <div className="row">
            <div className="mini-text d-flex">
              <p>
                <Link to={"/"}>
                  {" "}
                  <i className="fa fa-home"></i>Home
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div class="heading container mb-5 mt-3 ">
        <h2>Explore Bedroom Designs</h2>
      </div>

      <section className="galleryContainer">
        <div className="container-fluid">
          <div className="row">
            <div className=" gallery">
              {items
                .filter((item) => item.title2 === "bedroom")
                .map((item) => (
                  <div className=" imgContainer" key={item.id} w="50">
                    <img src={item.image} alt="" loading="lazy" />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <Faq />
      <Partners />
      <Contact />
    </div>
  );
}

export default Bedroom
