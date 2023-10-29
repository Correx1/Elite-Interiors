import React from 'react'
import OwlCarouselSlider from '../Files/OwlCarouselSlider';
import Testimonials from '../Testimonials/Testimonials';

import HeroSlider from '../Files/HeroSlider';
import CTA from '../CTA/CTA';
import Partners from '../Partners/Partners';
import Contact from '../Contact/Contact';
import Faq from '../FAQ/Faq';
import Navbar from '../Navbar/Navbar';




function Home() {
    return (
      <div>
       
        <Navbar />
        <HeroSlider />
        <CTA />

        <section className="whats-trending py-2" id="whats-trending">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <div className="text">
                  <h2>We Give Your Home</h2>
                  <h3>Interior uniqueness and Beauty</h3>
                  <p>
                    Our expert designers are dedicated to creating personalized
                    spaces that reflect your taste and personality. Discover the
                    art of interior decoration and let your home tell your
                    story. We pride ourselves on our commitment to delivering
                    exceptional design solutions that cater to your unique style
                    and requirements.
                  </p>
                </div>
              </div>
              <div className=" col-md-6 align-self-center">
                <div className="right-image">
                  <div className="thum">
                    <img src="/images/b24.jpg " alt="" />
                  </div>
                </div>
              </div>
              <div className="text-center align-items-center mt-0">
                <button className="btnn">
                  <a href="#">Book an Appointment with a Designer</a>
                </button>
              </div>
            </div>
          </div>
        </section>

        <OwlCarouselSlider />

        <section className="consultation   mt-3 py-4" id="cosultation">
          <div className="container">
            <div className="row flex-md-row flex-column-reverse">
              <div className="col-md-6 text-center  mt-4">
                <img src="/images/estimate.jpg" alt="" />
              </div>
              <div class="col-md-6 text m-auto pt-5">
                <h4>Get a free consultaion with our team</h4>
                <h6>Get estimate of your home design cost</h6>
                <p>
                  Whether you're dreaming of a complete home makeover or just
                  want to freshen up a room, our experts are here to guide you.
                  Plus, you can get a personalized estimate of your home design
                  cost, tailored to your budget and preferences.
                </p>
              </div>
              <div className="text-center align-items-center mt-0">
                <button className="btnn">
                  <a href="#"> Book an Appointment with a Designer</a>
                </button>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />

        <section className="good">
          <div className="container">
            <div className="row flex-md-row flex-column-reverse">
              <div className="col-md-6">
                <img src="/images/why.jpg" alt="" />
              </div>
              <div class="col-md-6">
                <div className="text mt-5 mb-2 ">
                  <div class="heading mb-3">
                    <h2>Why Us ?</h2>
                  </div>
               
                  <li className="why d-flex pb-3">
                    <img src="/images/exp.png" alt="" />
                    We work with team of experienced interior designers
                  </li>
                  <li className="why d-flex pb-3">
                    <img src="/images/cus.png" alt="" />
                    Our designs are customized to suit your taste and lifestyle
                  </li>
                  <li className="why d-flex pb-3">
                    <img src="/images/qua.png" alt="" />
                    We only work with top-quality materials to ensure the
                    longevity and beauty.
                  </li>
                  <li className="why d-flex pb-3">
                    <img src="/images/aff.png" alt="" />
                    We offer a range of packages to fit various budgets.
                  </li>
                  <li className="why d-flex pb-3">
                    <img src="/images/tim.png" alt="" />
                    Our projects are completed timely without compromising on
                    quality.
                  </li>
                </div>
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

export default Home
