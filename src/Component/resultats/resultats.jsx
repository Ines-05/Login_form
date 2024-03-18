import React from 'react'
import {link} from 'react-router-dom'

const Result = () =>{
    return (
        <div>
            <h1>Voir les résultats...</h1><br/>
            <div className="center-container">
                <div className="container">
                    <div className="content">
                        <form action=""/>
                            Identifiant : <input type="text" name="identifiant" /><br/>
                            <br/><button >Rechercher</button> 
                        
                    </div>
                    <div className="cont">
                    <p>Tapez l'identifiant de l'éléve pour afficher ses résultats</p>
                    </div>
    
                </div> 
                <br/><br/>
            <div><button>Retour</button>
            <button>Télécharger le pdf</button></div>
           
        </div>
    </div>
    );
}