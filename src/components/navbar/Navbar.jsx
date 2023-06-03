import React, { useEffect, useState } from 'react';
import './navbar.css';
import User from '../../images/user2.png';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [show,setShow] = useState(false);
    const NavVisibility = ()=>{
        if(window.scrollY > 100){
            setShow(true)
        }else{
            setShow(false)
        }
    };

    useEffect(()=>{
        window.addEventListener('scroll', NavVisibility);

        return ()=>{
            window.removeEventListener('scroll', NavVisibility);
        }
    },[])
  return (
    <div className={`nav ${show && 'nav-black'}`}>
        <Link to='/'>
            <img height={30} src='https://i.ibb.co/r5krrdz/logo.png' alt="logo" className='nav-logo' />
        </Link>
        <img height={30} src={User} alt="user" className='nav-avatar' />
    </div>
  )
}

export default Navbar;