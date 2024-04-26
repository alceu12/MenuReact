import React, { useState } from 'react';
import './MenuBar.css';
import Aberto from '../HamburguerAberto/Aberto';
import ItensMenu from '../ItensMenu/ItensMenu';
import 'bootstrap/dist/css/bootstrap.min.css';

const MenuBar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }



    return (
        <div className={`menu-bar ${isOpen ? 'wide' : 'narrow'}`} >
            <Aberto toggleMenu={toggleMenu} isOpen={isOpen} />
            <div className='itens-menu'>

                <ul className="nav flex-column">
                    <li>
                        <ItensMenu item="Home" icon="home.svg" isOpen={isOpen} />
                    </li>
                    <li>
                        <ItensMenu item="Sobre" icon="sobre.svg" isOpen={isOpen} />
                    </li>
                    <li>
                        <ItensMenu item="Contato" icon="icon.svg" isOpen={isOpen} />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MenuBar;
