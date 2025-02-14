import './Value.css'
import React from 'react'

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel
  } from 'react-accessible-accordion';
  
  import 'react-accessible-accordion/dist/fancy-example.css';
  import { MdOutlineArrowDropDown } from 'react-icons/md';
  import data from '../../utils/accordion.jsx'
  


const Value = () => {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            {/*left-side*/}
            <div className="v-left">
                <div className="image-container">
                    <img src="./value.png" alt="" />
                </div>
            </div>
            {/*right-side */}
            <div className="flexColStart v-right">
            <span className='orangeText'>Our Value</span>
            <span className='primaryText'>Value We Give To You</span>
            <span className='secondaryText'>
                We are always ready to provide the best service for You
                <br/>
                We believe a good place to live can make your life better
            </span>

            <Accordion
            className='accordion'
            allowMultipleExpanded={false}
            preExpanded={[0]}
            >
                {
                  data.map((item, i)=>{
                    return(
                        <AccordionItem className='accordionItem' key={i} uuid={i}>
                         <AccordionItemHeading>
                          <AccordionItemButton>
                        <div className="flexCenter icon">{item.icon}</div>
                          </AccordionItemButton>
                          </AccordionItemHeading>
                        </AccordionItem>
                    )
                  } ) 
                }

            </Accordion>
            </div>
        </div>
    </section>
  )
}

export default Value