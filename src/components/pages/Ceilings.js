import React from "react";
import Navbar from "../Navbar/Navbar";
import Faq from "../FAQ/Faq";
import Partners from "../Partners/Partners";
import Contact from "../Contact/Contact";
import items from "../Files/db.json";
import { Link } from "react-router-dom";

function Ceilings() {
  return (
    <div>
      <Navbar />
      <section className="subHero Ceilings">
        <div className="container">
          <div className="row">
            <div class="col-lg-12">
              <div className="main-text d-block">
                <h2>Ceilings Designs</h2>
                <p>
                  Ceiling design plays a crucial role in interior aesthetics. A
                  perfectly designed ceiling adds depth and character to a
                  space. It can create a sense of grandeur or coziness,
                  depending on the chosen design elements. From intricate
                  molding to modern recessed lighting, a well-planned ceiling
                  design enhances the overall ambiance of a room, making it more
                  inviting and visually appealing.
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
        <h2>Explore Ceilings Designs</h2>
      </div>

      <section className="galleryContainer">
        <div className="container-fluid">
          <div className="row">
            <div className=" gallery">
              {items
                .filter((item) => item.title2 === "ceilings")
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

export default Ceilings;
