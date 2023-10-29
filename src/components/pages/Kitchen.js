import React from "react";
import Navbar from "../Navbar/Navbar";
import Faq from "../FAQ/Faq";
import Partners from "../Partners/Partners";
import Contact from "../Contact/Contact";
import items from "../Files/db.json";
import { Link } from "react-router-dom";

function Kitchen() {
  return (
    <div>
      <Navbar />
      <section className="subHero Kitchen">
        <div className="container">
          <div className="row">
            <div class="col-lg-12">
              <div className="main-text d-block">
                <h2>Kitchen Designs</h2>
                <p>
                  The kitchen is the heart of a home, where culinary creativity
                  and family gatherings flourish. Perfect interior decoration in
                  the kitchen is vital for both functionality and style.
                  Thoughtful layouts, high-quality appliances, and aesthetically
                  pleasing elements create an environment that makes cooking
                  enjoyable and socializing memorable. A well-designed kitchen
                  fosters efficiency, making meal preparation a breeze while
                  maintaining a warm and inviting atmosphere.
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
        <h2>Explore Kitchen Designs</h2>
      </div>

      <section className="galleryContainer">
        <div className="container-fluid">
          <div className="row">
            <div className=" gallery">
              {items
                .filter((item) => item.title2 === "kitchen")
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

export default Kitchen;
