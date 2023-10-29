import React from 'react'
import OwlCarousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from 'react-router-dom';






function OwlCarouselSlider() {
  const trending = [
    {
      title: <Link to={"/Bedroom"}>See more</Link>,
      image: "/images/trending 1.jpg",
      id: 1,
    },
    {
      title: <Link to={"/Living"}>See more</Link>,
      image: "/images/trending 2.jpg",
      id: 2,
    },
    {
      title: <Link to={"/Living"}>See more</Link>,
      image: "/images/trending 3.jpg",
      id: 3,
    },
    {
      title: <Link to={"/Bedroom"}>See more</Link>,
      image: "/images/trending 4.jpg",
      id: 4,
    },
    {
      title: <Link to={"/Partition"}>See more</Link>,
      image: "/images/trending 5.jpg",
      id: 5,
    },
    {
      title: <Link to={"/Kitchen"}>See more</Link>,
      image: "/images/trending 6.jpg",
      id: 6,
    },
    {
      title: <Link to={"/Bathroom"}>See more</Link>,
      image: "/images/trending 7.jpg",
      id: 7,
    },
    {
      title: <Link to={"/Living"}>See more</Link>,
      image: "/images/trending 8.jpg",
      id: 8,
    },
    {
      title: <Link to={"/Bedroom"}>See more</Link>,
      image: "/images/trending 9.jpg",
      id: 9,
    },
    {
      title: <Link to={"/Living"}>See more</Link>,
      image: "/images/trending 10.jpg",
      id: 10,
    },
    {
      title: <Link to={"/ceiling"}>See more</Link>,
      image: "/images/trending 11.jpg",
      id: 11,
    },
    {
      title: <Link to={"/wardrobe"}>See more</Link>,
      image: "/images/trending 12.jpg",
      id: 12,
    },
    {
      title: <Link to={"/kitchen"}>See more</Link>,
      image: "/images/trending 13.jpg",
      id: 13,
    },
    {
      title: <Link to={"/bathroom"}>See more</Link>,
      image: "/images/trending 14.jpg",
      id: 14,
    },
    {
      title: <Link to={"/partition"}>See more</Link>,
      image: "/images/trending 15.jpg",
      id: 15,
    },
    {
      title: <Link to={"/kitchen"}>See more</Link>,
      image: "/images/trending 16.jpg",
      id: 16,
    },
    {
      title: <Link to={"/wardrobe"}>See more</Link>,
      image: "/images/trending 17.jpg",
      id: 17,
    },
    {
      title: <Link to={"/kitchen"}>See more</Link>,
      image: "/images/trending 18.jpg",
      id: 18,
    },
    {
      title: <Link to={"/ceiling"}>See more</Link>,
      image: "/images/trending 19.jpg",
      id: 19,
    },
    {
      title: <Link to={"/kitchen"}>See more</Link>,
      image: "/images/trending 20.jpg",
      id: 20,
    },
  ];

  const options = {
    loop: true,
    nav: true,
      dots: false,
    margin: 0,
  
    slideTransition: "linear",
    autoplay: false,
 
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      200: {
        items: 1,
        margin: 0,
      },
      400: {
        items: 1.5,
        margin: 0,
      },
      500: {
        items: 2,
        margin: 20,
      },
      700: {
        items: 2.5,
        margin: 20,
      },
      920: {
        items: 3,
        margin: 20,
      },
      1104: {
        items: 4,
        margin: 20,
      },
    },
    };
    
   

  return (
    <div>
      <section className="trending" id="trending">
        <div className="container">
          <div className="heading ">
            <h2>Trending Interiors</h2>
          </div>
          <div className="row">
            <h3 class="mb">
              <a href="#">Bedroom</a>
            </h3>

            <OwlCarousel className="owl-trending " {...options}>
              {trending
                .filter((trendingItems) => trendingItems.id <= 10)
                .map((trendingItems) => (
                  <div className="owl-iten thumb" key={trendingItems.id}>
                    <img src={trendingItems.image} alt="" />
                    <div className="hover-effect">
                      <div className="inner-content overflow-x-hidden">
                        <span>
                          <a href="#">{trendingItems.title}</a>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </OwlCarousel>

            <OwlCarousel className="owl-trending mt-3" {...options}>
              {trending
                .filter((trendingItems) => trendingItems.id > 10)
                .map((trendingItems) => (
                  <div className="owl-iten thumb" key={trendingItems.id}>
                    <img src={trendingItems.image} alt="" />
                    <div className="hover-effect">
                      <div className="inner-content overflow-x-hidden">
                        <span>
                          <a href="#">{trendingItems.title}</a>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
}


export default OwlCarouselSlider;





  