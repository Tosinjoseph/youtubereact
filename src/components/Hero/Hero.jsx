import React from 'react'
import './Hero.css'
import CountUp from 'react-countup'



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
                        <span className='secondaryText'>Find a variety of properties that suit you easily</span>
                        <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
                    </div>
                    <div className="search-bar flexCenter">
                     <input type="text" />
                        <button className='button'>Search</button>
                    </div>
                 <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                      <span>
                      <CountUp start={8800} end={9000} duration={4}/>
                      <span>+</span>
                        </span>
                        <span className='secondaryText'>Premium products</span>
                    </div>
                    <div className="flexColCenter stat">
                      <span>
                      <CountUp start={1950} end={2000} duration={4}/>
                      <span>+</span>
                        </span>
                        <span className='secondaryText'>Happy customers</span>
                    </div>
                    <div className="flexColCenter stat">
                      <span>
                      <CountUp end={48}/>
                      <span>+</span>
                        </span>
                        <span className='secondaryText'>Award winning</span>
                    </div>
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


