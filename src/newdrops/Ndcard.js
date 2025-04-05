import React from 'react';
import nimg from './images/first.webp';
import nimg1 from './images/second.webp';
import './Ndcard.css';

export default function Ndcard() {
  return (
    <div className='newcard'>
        <div className='ncard'>
        <img src={nimg} alt='newimage'/>
        <p>New Product</p>
        <p>Rs. 500.00</p>
        </div>

        <div className='ncard'>
        <img src={nimg1} alt='newimage'/>
        <p>New Product</p>
        <p>Rs. 550.00</p>
        </div>

    </div>
  )
}
