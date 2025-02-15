import './Footer.css'
import React from 'react'

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
        {/*left */}
        
        <div className="flexColStart f-left">
            <img src="./logo2.png" alt=""  width={120}/>
            <span className='secondaryText'>
                Our vision is to make all people<br/>
                the best place to live to live for them
            </span>
            </div>
            {/*right */}
            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>Miami, Florida, USA.</span>

                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Products</span>
                    <span>About Us</span>
                </div>
            </div>
        
        </div>
    </section>
  )
}

export default Footer