import React from 'react'

function Mobile() {
  return (
    <div className="mobile">
        <div className="container">
            <div className="mobile_row">
                <div className="mobile_content">
                    <h1 className="mobile_title">Download  Our <span className="banner_marked">Mobile App</span></h1>
                    <p className="mobile_sub">It's all at your fingertips -- the restaurants you love. Find the right food to suit your mood, and make the first bite last. Go ahead, download app and get 50% discount</p>
                    <div className="mobile_stores">
                        <div className="mobile_store">
                            <img src="./images/appstore.png" alt="" />
                        </div>
                        <div className="mobile_store">
                            <img src="./images/playmarket.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="mobile_image">
                    <img src="./images/Group 178.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mobile