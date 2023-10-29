import React from "react";
import Navbar from "../Navbar/Navbar";
import Faq from "../FAQ/Faq";
import Partners from "../Partners/Partners";
import Contact from "../Contact/Contact";
import items from "../Files/db.json";
import { Link } from "react-router-dom";

function Living() {
  return (
    <div>
      <Navbar />
      <section className="subHero living">
        <div className="container">
          <div className="row">
            <div class="col-lg-12">
              <div className="main-text d-block">
                <h2>Sitting Room Designs</h2>
                <p>
                  The sitting room is the heart of any home, where family and
                  friends gather to relax and connect. A perfect interior
                  decoration is essential to create an inviting atmosphere,
                  reflecting the homeowner's personality and style. Thoughtful
                  design choices, from color schemes to furniture placement, can
                  transform this space into a cozy haven, enhancing comfort and
                  fostering memorable moments.
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
                  <i className="fa fa-home"></i>Home
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div class="heading container mb-5 mt-3 ">
        <h2>Explore Living Room Designs</h2>
      </div>

      <section className="galleryContainer">
        <div className="container-fluid">
          <div className="row">
            <div className=" gallery">
              {items
                .filter((item) => item.title2 === "sittingroom")
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

export default Living;
