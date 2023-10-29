import React from "react";
import Navbar from "../Navbar/Navbar";
import Faq from "../FAQ/Faq";
import Partners from "../Partners/Partners";
import Contact from "../Contact/Contact";
import items from "../Files/db.json";
import { Link } from "react-router-dom";

function Shelves() {
  return (
    <div>
      <Navbar />
      <section className="subHero Shelves">
        <div className="container">
          <div className="row">
            <div class="col-lg-12">
              <div className="main-text d-block">
                <h2>Shelves Designs</h2>
                <p>
                  Shelves are indispensable in interior design, providing both
                  storage and display opportunities. Perfectly designed shelves
                  are not only practical but also aesthetically pleasing.
                  Thoughtful arrangements of books, decor, and personal items
                  can transform them into focal points, adding character and
                  functionality to a space. Well-designed shelves offer a unique
                  opportunity to showcase personal style and curate a visually
                  appealing environment.
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
        <h2>Explore Shelves Designs</h2>
      </div>

      <section className="galleryContainer">
        <div className="container-fluid">
          <div className="row">
            <div className=" gallery">
              {items
                .filter((item) => item.title2 === "shelves")
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

export default Shelves;
