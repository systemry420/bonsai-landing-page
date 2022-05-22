import React from 'react'
import logo from '../styles/logo.JPG';

const Header = () => {
  return (
    <div className='header'>
        <div className='header__logo'>
            <img src={logo} alt='logo' />
            <h2>bonsai</h2>
        </div>
        <div className='header__links'>
            <ul>
                <li>
                    <a href='..'>Product</a>
                </li>
                <li>
                    <a href='..'>Templates</a>
                </li>
                <li>
                    <a href='..'>Pricing</a>
                </li>
                <li>
                    <a href='..'>Reviews</a>
                </li>
            </ul>
        </div>
        <div className='header__actions'>
            <a href='..' className='login'>Log in</a>
            <a href='..' className='start'>Start now</a>
        </div>
    </div>
  )
}

export default Header