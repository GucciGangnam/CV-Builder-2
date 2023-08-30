// import styles
import "./App.css"

//Import Hooks

// Import components
import { NavBar } from "./Components/NavBar";
import { ClearFill } from "./Components/ClearFill";
import { PersonalDetails } from "./Components/PersonalDetails";
import { useState } from "react";



const App = () => {
const [fullName, setFullName] = useState("")
const [number, setNumber] = useState("")
const [email, setEmail] = useState("")
const [location, setLocation] = useState("")


  return (
    <div className='App'>
      <div className="LeftScreen">
        <NavBar/>
        <ClearFill/>
        <PersonalDetails fullName={fullName} setFullName={setFullName} number={number} setNumber={setNumber} email={email} setEmail={setEmail} location={location} setLocation={setLocation}/>
      </div>
      <div className="RightScreen">
        <div className="Preview">
          {fullName}{number}{email}{location}

        </div>
      </div>
    </div>
  );
};

export default App;