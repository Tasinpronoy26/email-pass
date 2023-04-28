import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <Link to='/'>Home</Link>
            <Link to='/service'>Service</Link>
            <Link to='/login'>Log In</Link>
            <Link to='/register'>Register</Link>
        </nav>
    );
};

export default Header;