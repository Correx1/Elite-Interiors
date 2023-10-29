import React from "react";
import Slider from "react-slick/lib/slider";

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function HeroSlider() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    loop: true,
    speed: 1600,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    slidesToShow: 1,
    pauseOnHover: false,
    dots: false,
    cssEase: "linear",
    fade: true,
    draggable: false,
    prevArrow: false,
    nextArrow: false,
  };


   


    return (
        <div>
             <div className="hero mt-5" id="hero">
          {/* <!-- Banner Starts Here --> */}
          <div className="main-banner header-text text-center" id="top">
        <Slider className="Modern-Slider" {...settings}>
          <div>
            <div className="item item-1">
              <div className="img-fill">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="header-text">
                        <h6>We Provide Everything</h6>
                        <h2>
                          <em>Interior</em> Decoration
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="item item-2">
              <div className="img-fill">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="header-text">
                        <h6>We Provide Everything</h6>
                        <h2>
                          <em>Interior</em> Decoration
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="item item-3">
              <div className="img-fill">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="header-text">
                        <h6>We Provide Everything</h6>
                        <h2>
                          <em>Interior</em> Decoration
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      </div>
      </div>
      
    );
}

export default HeroSlider;
