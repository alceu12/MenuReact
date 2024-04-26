import React from 'react';
import aberto from './Aberto.svg';
import fechado from './Fechado.svg';
import './Aberto.css';

const Aberto = ({ toggleMenu, isOpen }) => {  
    return (
        <div className='container-logo'>
            <img onClick={toggleMenu} src={isOpen ? aberto : fechado} alt='logo-marca' />

        </div>
    );
}

export default Aberto;
