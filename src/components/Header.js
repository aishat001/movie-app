import React from 'react';
import logo from '../assets/Logo.svg';

const Header = () => {

    return (
        <header className='w-full flex justify-center md:justify-start mr-auto px-20 bg-black h-20'>
            <img src={logo} alt="" width='150px' height='60px'/>
        </header>
    )
}

export default Header