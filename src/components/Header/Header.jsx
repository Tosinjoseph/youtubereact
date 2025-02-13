import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div>
        <section className="h-wrapper">
            <div className="h-container flexCenter paddings innerWidth">

                <img src="./logo.png" alt="logo" width={100}/>

                <div className="h-menu flexCenter">
                    <a href="">Residencies</a>
                    <a href="">Our value</a>
                    <a href="">Contact us</a>
                    <a href="">Get started</a>
                   <button className='button'><a href="">Contact</a></button> 
                </div>
            </div>
        </section>
    </div>
  )
}

export default Header
