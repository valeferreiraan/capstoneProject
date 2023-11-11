import React from "react";
import Header from '../../components/header/header';
import Subheader from "../../components/subheader/Subheader";
import Catalogo from '../../components/catalogo/Catalogo';

import './home.css';

function Home(){
    return(
        <div>
            <Header />
            <div class = "content">
                <Subheader />
            <div class="expl">
                <h2>
                    ¿Qué habilidades quieres adquirir? Te mostramos tu ruta de aprendizaje
                </h2>

                <br/><br/><br/>
                <p>
                    Utilizando procesamiento de lenguaje natural e inteligencia artificial, creamos un algoritmo capaz de mostrar rutas de aprendizaje con nuestros URMoocs, cursos de pregrados y cursos de posgrados... 
                    <br/>
                    *inserte mucho texto aquí sobre el proyecto*
                </p>

                <div class="boton">
                    <a href="#">
                        Haz tu ruta de aprendizaje aquí
                    </a>
                </div>
            </div>

            <Catalogo />

            
            
        </div>


            
        </div>

    )
    
}

export default Home;