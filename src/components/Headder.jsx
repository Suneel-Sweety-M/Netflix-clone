import React from 'react';
import './headder.css';
import { Link } from 'react-router-dom';

const Headder = () => {
  return (
    <header className='showcase'>
      <div className="showcase-top">
        <img src="https://i.ibb.co/r5krrdz/logo.png" alt="logo" width={100} />
        <Link to="/" className='btn btn-rounded'>sign in</Link>
      </div>
      <div className="showcase-content">
        <h1>Unlimited movies, TV shows and more</h1>
        <p>Watch anywere. Cancel Anytime</p>
        <Link to='/show' className='btn btn-xl'>
          Watch Free For 30 Days 
          <i className="fa-solid fa-angle-right"></i>
        </Link>
      </div>
    </header>
  )
};

export default Headder;