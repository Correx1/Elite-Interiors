import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../Testimonials/testimonial.css"

function Testimonials() {
  const testimonials = [
    {
          desc: "I couldn't be happier with the transformation of my home. The design team truly understood my style and brought it to life. The quality of the work is exceptional, and the attention to detail is remarkable. I highly recommend this service to anyone looking to make their living spaces a work of art ",
          clientName: "Ben Ahmad",
          title:"lorem peom gdh",
          image:"/images/icons8-quote-50.png"
    },
    {
          desc: "The interior decoration service exceeded my expectations. The design process was collaborative, and I felt involved at every step. The result was a beautiful, functional, and cozy home. .",
          clientName: "Uche Benitta",
          title:"lorem peom gdh",
          image:"/images/icons8-quote-50.png"
    },
    {
          desc: "Working with this team was a dream come true. They listened to my ideas and incorporated them seamlessly into the design. The end result is a home that reflects my personality and taste. The service was professional, and I was impressed with the level of creativity they brought to my project.",
          clientName: "Samuel Bright",
          title:"lorem peom gdh",
          image:"/images/icons8-quote-50.png"
    },
    {
          desc: "I am delighted with the outcome of our commercial space renovation. The team demonstrated expertise in creating a professional yet inviting atmosphere.",
          clientName: "Taiwo Akindele",
          title:"lorem peom gdh",
          image:"/images/icons8-quote-50.png"
    },
    ];
    
    const options = {
      loop: true,
      nav: false,
      dots: true,
      items: 1,
      margin: 10,
      // autoWidth:true,
      // autoHeight:true,
      autoplay: false,
      smartSpeed: 700,
      autoplayTimeout: 6000,
      responsive: {
        0: {
          items: 1,
          margin: 0,
        },
        460: {
          items: 2,
          margin: 0,
        },
        576: {
          items: 2.5,
          margin: 20,
        },
        992: {
          items: 3,
          margin: 10,
        },
      },
    };

    return (
      <div class="testimonials mt-5">
        <div class="container">
          <div class="heading ">
            <h2>Read what our satisfied clients have to say</h2>
          </div>
          <div class="row py-4">
            <OwlCarousel className="owl-testimony" {...options}>
              {testimonials.map((testimonial) => (
                <div className="item p-4">
                  <p>{testimonial.desc}</p>
                  <div className="nametext">
                    <h3>{testimonial.clientName}</h3>
                 
                  </div>

                  <img className="icon-image" src={testimonial.image} alt="" />
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    );
    
}

export default Testimonials;


