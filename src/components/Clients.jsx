import React from 'react'

function Clients() {
  return (
    <div className="clients">
        <div className="container">
            <div className="clients_title">
                <h1 className="mobile_title">What Our Client Are  <span className="banner_marked">Saying</span></h1>
            </div>
            <div className="clients_row">
                <div className="clients_image">
                    <img src="./images/girl.png" alt="" />
                </div>
                <div className="clients_content">
                    <p className="clients_text">EFood has the most intriguing food order system in the country. UI in both their app and web Is very simple and easy to use, enhancing the UX. Their delivery men are also quite professional and knows the neighborhood well. Till now I never had to guide them to my address for delivery; </p>
                    <div className="clients_more">
                        <div className="clients_txt">
                            <p className="clients_name">Anglina Jole</p>
                            <p className="clients_desc">Food lover</p>
                        </div>
                        <div className="clients_buttons">
                            <div className="clients_icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M27 16H5" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 7L5 16L14 25" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                            </div>
                            <div className="clients_icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M5 16H27" stroke="#FF7A50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 7L27 16L18 25" stroke="#FF7A50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Clients