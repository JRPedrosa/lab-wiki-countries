import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from "./components/CountriesList"
import countriesJSON from "./countries.json";
import { useState, useEffect } from "react";
import CountryDetails from './components/CountryDetails';
import {Switch, Route} from "react-router-dom";

function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {     
    
    setCountries(countriesJSON);
    
}, []) 



  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
        
          <CountriesList countries={countries} />

          <Switch>

            <Route exact path="/country/:id" component={CountryDetails} />

          </Switch>

          

        </div>
      </div>
      
    </div>
  );
}

export default App;
