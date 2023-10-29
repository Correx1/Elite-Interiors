import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../Partners/partner.css"

function Partners() {
    const partners = [
      {
        img: "/images/client-1.png",
        id:1,
      },
      {
        img: "/images/client-2.png",
        id:2,
      },
      {
        img: "/images/client-3.png",
        id:3,
      },
      {
        img: "/images/client-4.png",
        id:4,
      },
      {
        img: "/images/client-5.png",
        id:5,
      },
      {
        img: "/images/client-6.png",
        id:6,
      },
      {
        img: "/images/client-7.png",
        id:7,
      },
      {
        img: "/images/client-8.png",
        id:8,
      },
    ];

   const options = {
     loop: true,
     nav: false,
     dots: false,
     items: 1,
     margin: 0,
     animateIn: "fadeIn",
     animateOut: "fadeOut",
     slideTransition: "linear",
     autoplay: true,
     smartSpeed: 6000,
     autoplayTimeout: 6000,
     responsive: {
       0: {
         items: 3,
         margin: 0,
       },
       460: {
         items: 3,
         margin: 0,
       },
       500: {
         items: 4,
         margin: 20,
       },
       700: {
         items: 5,
         margin: 30,
       },
       920: {
         items: 6,
         margin: 10,
       },
     },
   };

   return (
     <div>
       <section class="partners ">
         <div class="container-fluid">
           <div class="heading container my-5">
             <h2>Our Partners</h2>
           </div>
           <div class="row mb-5" >
             <div class="col-md-12">
               <OwlCarousel className="owl-partners" {...options}>
                 {partners.map((partner) => (
                   <div className="partner-item" key={partner.id}>
                     <img src={partner.img} alt="" />
                   </div>
                 ))}
               </OwlCarousel>
             </div>
           </div>
         </div>
       </section>
     </div>
   );
}

export default Partners
