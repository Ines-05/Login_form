import React from 'react';
import './Loginform.css';
import { FaRegUser } from "react-icons/fa6";
const Loginform = () =>{
    return (
        <div>
            <FaRegUser  className='Icons'/>
            <h1>Paiement...</h1>
        <div className='wrapper'>
           
                
                <div className='input-box'>
                    <button className='Button'><a href="#">Carte bancaire</a></button>
                </div>
                <div className='input-box'>
                    <button className='Button'><a href="#"> Choisir un autre moyen</a></button>
                </div>
               
        </div>
        <button className='decon'>Retour</button>
        </div>
    )
};

export default Loginform;