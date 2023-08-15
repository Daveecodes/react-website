import React from 'react'

function Menuitem(props) {
  return (
    <div className="menu_item">
        <div className="menu_image">
          <img src={props.img} alt="" />
        </div>
        <div className="menu_name">{props.name}</div>
        <div className="menu_price">{props.price}</div>
        <button className="menu_button">
            <p className="menu_button_text">Add to Cart</p>
        </button>
    </div>
  )
}

export default Menuitem