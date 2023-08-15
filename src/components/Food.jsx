import React from 'react'
import Foodpanel from './Foodpanel'

function Food() {

  const foodPanel = [
    {
      id: 1,
      img:'./images/a.png',
      name:'Blaze Pizza',
      time:'11.00 AM - 10.00 PM',
    },
    {
      id: 2,
      img:'./images/f.png',
      name:'Pizza Ranch',
      time:'09.00 AM - 10.00 PM',
    },
    {
      id: 3,
     img:'./images/e.png',
      name:'	Dion’s Pizza Hut',
      time:'10.00 AM - 12.00 PM',
    },
  ]


  const foodPanelTwo =[
    {
      id: 1,
     img:'./images/d.png',
      name:'Royel Burger',
      time:'11.00 AM - 10.00 PM',
    },
    {
      id: 2,
     img:'./images/c.png',
      name:'KFC Restaurant',
      time:'09.00 AM - 10.00 PM',
    },
    {
      id: 3,
     img:'./images/b.png',
      name:'Star Food',
      time:'10.00 AM - 12.00 PM',
    },
  ]
  return (
    <div className="food">
      <div className="container">
        <h1 className="food_title">Top Food <span className="banner_marked">restaurant</span></h1>
        <div className="food_row">
          <div className="food_choice">
          {
            foodPanel.map((item, key) =>(
              <Foodpanel key={key} img={item.img} name={item.name} time={item.time}/>
            ))
          }
          </div>

          <div className="food_choice">
          {
            foodPanelTwo.map((item, key) =>(
              <Foodpanel key={key} img={item.img} name={item.name} time={item.time}/>
            ))
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Food