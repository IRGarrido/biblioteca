import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/'>
        <h1 className="logo">
            <span>Ionteca</span>
            <img src="imgs/Logotipo.png" alt="Logotipo Ionteca"/>
        </h1>
    </Link>
  );
};

export default Logo;