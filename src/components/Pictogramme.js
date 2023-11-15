import React from "react";
import Icone from "./Icone";
import { useState } from "react";
const Pictogramme =()=>{
    const [message,setMessage]=useState("Bonne découverte des composants React Components!!!")
        return(
        <div>
            {/* Inclut le sous-composant LikeIcon à l'intérieur du composant Like*/}
            <p>{message}</p>
            <Icone />
            
            <hr />
          <div>
           <button type="button" class="btn no-outline btn-secondary">
            <i class="fa fa-thumbs-o-up fa-4 align-middle" aria-hidden="true"></i>
            &nbsp;
            <span class="align-middle"onClick={()=> setMessage("premier defi reussit")}>J'aime</span>
          </button>
          </div>
      </div>)

    
}

export default Pictogramme