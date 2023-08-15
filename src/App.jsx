import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Menu from './components/Menu'
import Deliver from './components/Deliver'
import Food from './components/Food'
import Mobile from './components/Mobile'
import Clients from './components/Clients'
import Register from './components/Register'

function App() {
  return (
    <div className="wrapper">
        <Header/>
        <Banner/>
        <Menu/>
        <Deliver/>
        <Food/>
        <Mobile/>
        <Clients/>
        {/* <Register/> */}
    </div>
  )
}

export default App