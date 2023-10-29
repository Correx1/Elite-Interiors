import React from 'react'
import Navbar from '../Navbar/Navbar';
import Faq from '../FAQ/Faq';
import Partners from '../Partners/Partners';
import Contact from '../Contact/Contact';
import items from "../Files/db.json"
import { Link } from 'react-router-dom';



function Bathroom() {

  return (
    <div>
      <Navbar />
      <section className="subHero bathroom">
        <div className="container">
          <div className="row">
            <div class="col-lg-12">
              <div className="main-text d-block">
                <h2>Bathroom Designs</h2>
                <p>
                  The bathroom, often a sanctuary of solitude, deserves perfect
                  interior decoration. A well-designed bathroom can be a
                  tranquil escape, promoting relaxation and rejuvenation.
                  Thoughtful choices in fixtures, color palettes, and storage
                  can elevate the bathroom's functionality and aesthetics,
                  turning it into a personal oasis within the home.
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
        <h2>Explore Bathroom Designs</h2>
      </div>

      <section className="galleryContainer">
        <div className="container-fluid">
          <div className="row">
            <div className=" gallery">
              {items
                .filter((item) => item.title2 === "bathroom")
                .map((item) => (
                  <div className=" imgContainer" key={item.id} w="50">
                    <img src={item.image} alt="" loading='lazy' />
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

export default Bathroom
