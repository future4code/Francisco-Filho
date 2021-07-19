import React from 'react';
import './CardPequeno.css';


function CardPequeno(props) {
    return (
        <div className="div-pequena">
            
            <p>{ props.texto }</p>
        </div>

    )
}

export default CardPequeno;
