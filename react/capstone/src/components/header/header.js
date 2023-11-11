import React from 'react';
import './header.css';
import LogoUR from './thumbnail_UROSARIO_Logo_Horizontal_nuevocolor.png';
import iconBuscar from './icon_busqueda.svg';

function Header(){
    return(
        /*caracteristicas del componente*/
        <header>
            <div class = "logoUR">
                <img src={LogoUR} alt=''></img>
            </div>
            <div class = "nav">
                <a href="#">
                    URMoocs
                </a>
                <a href='#'>
                    Pregrados
                </a>
                <a href='#'>
                    Posgrados
            </a>
            </div>
            <div class="search">
            <input type="text" id="searchInput" placeholder="Buscar..."/>
            <button id="searchButton"><img src={iconBuscar}/></button>
        </div>
        </header>
    )
}

export default Header;