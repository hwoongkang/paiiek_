import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header>
            <h1>Homepage of Paiiek</h1>
            <Link to = "/">Home</Link> | <Link to="/about">About</Link> | <Link to="Design">Design</Link> | <Link to ="/sound">Sound</Link>
        </header>
    );
}


export default Header;
