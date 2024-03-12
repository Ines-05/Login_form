import React from 'react';
import './Loginform.css';
import { FaRegUser } from "react-icons/fa6";
const Loginform = () =>{
    return (
        <div>
            <FaRegUser  className='Icons'/>
            <h1>Bienvenue</h1>
        <div className='wrapper'>
           
                
                <div className='input-box'>
                    <button className='Button'><a href="#">Voir les résultats</a></button>
                </div>
                <div className='input-box'>
                    <button className='Button'><a href="#"> Paiement</a></button>
                </div>
               
        </div>
        <button className='decon'>Déconnexion</button>
        </div>
    )
};

export default Loginform;