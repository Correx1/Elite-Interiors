import React from "react";
import Navbar from "../Navbar/Navbar";
import Faq from "../FAQ/Faq";
import Partners from "../Partners/Partners";
import Contact from "../Contact/Contact";
import items from "../Files/db.json";
import { Link } from "react-router-dom";

function Wardrobe() {
  return (
    <div>
      <Navbar />
      <section className="subHero wardrobe">
        <div className="container">
          <div className="row">
            <div class="col-lg-12">
              <div className="main-text d-block">
                <h2>Wardrobe Designs</h2>
                <p>
                  Wardrobes are essential components of any bedroom, and perfect
                  interior decoration for these units is crucial. Thoughtfully
                  designed wardrobes offer efficient storage and organization
                  while enhancing the room's overall aesthetics. Smart
                  utilization of space, elegant finishes, and personalized
                  features create a wardrobe that not only stores clothing and
                  accessories but also adds to the room's style and
                  functionality.
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
        <h2>Explore Wardrobe Designs</h2>
      </div>

      <section className="galleryContainer">
        <div className="container-fluid">
          <div className="row">
            <div className=" gallery">
              {items
                .filter((item) => item.title2 === "wardrobes")
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

export default Wardrobe;
