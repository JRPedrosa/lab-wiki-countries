import React, { useState } from "react";
import { NavLink } from "react-router-dom";


function CountriesList({ countries }) {

    return (
        <>

          <div className="col-5" style={{maxHeight: "90vh" , overflow: "scroll"}} >    
            <div className="list-group">

                
                    {countries.map((country, index) => {
                        return (

                            <NavLink className="list-group-item list-group-item-action" key={index} exact to={`/country/${country.alpha3Code}`}>

                                <img src={`https://www.countryflags.io/${country.alpha2Code}/flat/32.png`} />

                                <p>{country.name}</p>
                                
                            </NavLink>  
                        ) 
                        
                    })}
                
              

            </div>
          </div>

            

        </>
      
    );
}

export default CountriesList;






