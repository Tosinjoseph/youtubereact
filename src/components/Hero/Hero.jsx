import React from 'react'
import './Hero.css'


const Hero = () => {
  return (
    <div>
        <section className="hero-wrapper">
            <div className="padding innerWidth flexCenter hero-container">
{/*left side */}
                <div className="hero-left flexColStart">
                    <div className="hero-title">
                    <div className="orange-circle"/>
                        <h1>Discover<br/> Most Suitable<br/> Property</h1>
                    </div>
                    <div className="hero-des flexColStart">
                        <span>Find a variety of properties that suit you easily</span>
                        <span>Forget all difficulties in finding a residence for you</span>
                    </div>
                    <div className="search-bar flexCenter">
                      
                        <input type="text" />
                        <button className='button'>Search</button>
                    </div>
                </div>
{/*right side */}
                 <div className="flexCenter hero-right">
                  <div className="image-container">
                    <img src="./hero-image.png" alt="" />
                  </div>
                 </div>
            </div>
        </section>
    </div>
  )
}

export default Hero


