import React from 'react';
import logo from '../../images/logo.png'
import './heading.css'

const Heading = () => {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="" />
            <nav>
                <a href="Shop">Shop</a>
                <a href="order Review">Order Review</a>
                <a href="home">Home</a>
            </nav>
        </div>
    );
};

export default Heading;