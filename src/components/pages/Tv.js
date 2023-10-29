import React from "react";
import Navbar from "../Navbar/Navbar";
import Faq from "../FAQ/Faq";
import Partners from "../Partners/Partners";
import Contact from "../Contact/Contact";
import items from "../Files/db.json";
import { Link } from "react-router-dom";

function Tv() {
  return (
    <div>
      <Navbar />
      <section className="subHero tv">
        <div className="container">
          <div className="row">
            <div class="col-lg-12">
              <div className="main-text d-block">
                <h2>Tv Unit Designs</h2>
                <p>
                  TV units are central to modern living spaces, where
                  entertainment and aesthetics intersect. Perfectly designed TV
                  units seamlessly blend technology and style. Thoughtful
                  storage, cable management, and complementary decor create a
                  harmonious focal point. Well-planned TV units enhance the
                  overall ambiance, allowing for a clutter-free, visually
                  appealing, and functional entertainment center in the home.
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
        <h2>Explore Tv Unit Designs</h2>
      </div>

      <section className="galleryContainer">
        <div className="container-fluid">
          <div className="row">
            <div className=" gallery">
              {items
                .filter((item) => item.title2 === "Tv")
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

export default Tv;
