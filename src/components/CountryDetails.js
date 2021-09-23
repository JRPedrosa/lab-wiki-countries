import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import countriesJSON from "../countries.json";


function CountryDetails(props) {

    const [country, setCountry] = useState(countriesJSON[0])


    useEffect(() => {
        
        const countryId = props.match.params.id;
        const foundCountry = countriesJSON.find((country) => country.alpha3Code === countryId);
        setCountry(foundCountry);
        
          
    }, [props.match.params.id]) 



    return (
        <div className="col-7">
            <img src={`https://www.countryflags.io/${country.alpha2Code}/shiny/64.png`} alt="country flag" style={{width: 200}}/>
            <h1>{country.name}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: 30}}>Capital</td>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {country.area} km <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>

                    {country.borders.map((border, index) => {
                        const bananas = countriesJSON.find((country) => country.alpha3Code === border);
                        return <li key={index}>   <NavLink exact to={`/country/${border}`}>{bananas.name}</NavLink>   </li>
                    })}
                    

                      
                      
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
      
    );
}

export default CountryDetails;