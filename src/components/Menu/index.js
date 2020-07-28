import React from 'react';
import Logo from '../../assets/img/LogoMain.png';
import './Menu.css';
import Button from '../Button';

function Menu(){
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="logo do projeto"/>
            </a>

            <Button href="/">Novo Vídeo</Button>
            


        </nav>
    );
}

export default Menu;
