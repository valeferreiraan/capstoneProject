import Card from '../card/Card';
import cursos from './catalogo.json';
import './Catalogo.css';


function Catalogo(){
    return(
        <div class = "catalogo">
            <Card />

            <Card />

            <Card />

            <Card />
            

        </div>
    )
}

export default Catalogo;


