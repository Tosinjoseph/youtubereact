import React, { useState } from 'react'
import './Header.css'
import {Link} from 'react-scroll'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler';


const Header = () => {
  const[menuOpen, setMenuOpen] =useState(false)
  const toggleMenu =()=>{
    menuOpen? setMenuOpen(false) : setMenuOpen(true);
  }
  return (
    <div>
        <section className="h-wrapper">
            <div className="h-container flexCenter paddings innerWidth">

                <img src="./logo.png" alt="logo" width={100}/>
          <OutsideClickHandler
          onOutsideClick={()=>setMenuOpen(false)}>
                <div className={`h-menu flexCenter ${menuOpen? '' :'h-menu-hide'}`}>
                    <a href=""><Link to='r-wrapper' smooth={true} duration={100}>Residencies</Link></a>
                    <a href=""><Link to='v-wrapper' duration={500}>Our value</Link></a>
                    <a href=""><Link to='c-wrapper' duration={500}>Contact us</Link></a>
                    <a href=""><Link to='g-wrapper' duration={500}>Get started</Link></a>
                   <button className='button'><a href=""><Link to='f-wrapper' duration={500}>Contact</Link></a></button> 
                </div>
                <div className="menu-icon">
                  <BiMenuAltRight size={30} onClick={toggleMenu}/>
                </div>
                </OutsideClickHandler>
            </div>
        </section>
    </div>
  )
}

export default Header
