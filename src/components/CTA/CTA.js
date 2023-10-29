import React from 'react'
import "../CTA/cta.css"

function CTA() {
  return (
    <div className="cta">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col ">
            <div className="content text text-center gx-5">
              <div>
                <h3>Looking For The Best Interior Decoration for your Home?</h3>
              </div>
              <div className=" ms-auto">
                <button className="btnnn">
                  <a href="#contact">Contact Us</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA
