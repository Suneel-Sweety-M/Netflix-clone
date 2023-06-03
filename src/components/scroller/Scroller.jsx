import React, { useEffect, useState } from 'react';
import './scroller.css';

const Scroller = () => {
    const [isVisible,setVisible] = useState(false);
    const toggleVisibility =()=>{
        if(window.pageYOffset > 30){
            setVisible(true);
        }else{
            setVisible(false);
        }
    };
    const scrollTop =()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };
    useEffect(()=>{
        window.addEventListener('scroll', toggleVisibility);
        return ()=>{
            window.removeEventListener('scroll', toggleVisibility)
        }
    });

  return (
    <div className='scroll-to-top'>
        {isVisible && (<div onClick={scrollTop}>
            <i className='fa fa-arrow-circle-up fa-3x'></i>
        </div>)}
    </div>
  )
};

export default Scroller;