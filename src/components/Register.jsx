import React from 'react'

function Register() {
  return (
    <div className="register">
        <div className="container">
            <div className="register_row">
                <div className="register_text">
                    <h1 className="register_title">Subscribe to get the Latest Offer</h1>
                    <p className="register_sub">Get our daily updates by subscribing to our newspaper, please drop your email below</p>
                </div>
                <div className="register_form">
                    <input type="email" className="register_input" name='register' id='register' placeholder='Enter your email addres'/>
                    <label className='register_label' htmlFor="register" typeof='submit'>
                        <span className='register_icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
<path d="M10.525 14.3001C10.28 14.3001 10.0538 14.1616 9.94328 13.9406L8.01408 10.0822C7.90813 9.87034 7.92633 9.61684 8.06088 9.42119L11.175 5.20009L6.95328 8.31359C6.75763 8.44879 6.50413 8.46569 6.29223 8.36039L2.43448 6.43184C2.20308 6.31549 2.06203 6.07304 2.07633 5.81434C2.08998 5.55564 2.25703 5.32944 2.50013 5.24039L14.8501 0.690388C15.0874 0.603938 15.3545 0.660488 15.5346 0.840538C15.714 1.01929 15.7725 1.28709 15.6847 1.52499L11.1347 13.875C11.045 14.1181 10.8195 14.2851 10.5608 14.2988C10.5491 14.2994 10.5367 14.3001 10.525 14.3001Z" fill="white"/>
</svg>
                        </span>
                        <span className="register_txt">Subscribe</span>
                    </label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register