import React from 'react'

function Banner() {
  return (
    <div className="banner">
        <div className="container">
            <div className="banner_row">
               <div className="banner_content">
                 <div className="banner_text">
                    <h1 className="banner_title">
                        super fast <span className="banner_marked">Food delivery</span> service
                    </h1>
                    <p className="banner_sub">
                        We provide super fast-delivery service. Let’s use our services right now and get discounts of up to 50%
                    </p>
                 </div>
                 <div className="banner_buttons">
                    <button className="header_button">
                        <p className="header_button_text">Explore Food</p>
                    </button>
                    <a href="#" className="banner_download">
                    Download App
                    </a>
                 </div>
               </div>
                <div className="banner_image">
                    <img src="./images/Content.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner