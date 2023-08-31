// import styles
import "./App.css"

//Import Hooks

// Import components
import { NavBar } from "./Components/NavBar";
import { ClearFill } from "./Components/ClearFill";
import { PersonalDetails } from "./Components/PersonalDetails";
import { useState } from "react";
import { Education } from "./Components/Education";
import { Experience } from "./Components/Experience";



const App = () => {
  //States
  //Personal Info
  const [personalDetails, setPersoanlDetails] = useState({fullName: "", number: "", email: "", location: ""})
  //Education
  const [education, setEducation] = useState({uniName: "", year: "", degree: "", score: ""})


  return (
    <div className='App'>
      <div className="LeftScreen">
        <NavBar/>
        <ClearFill 
        personalDetails={personalDetails} setPersoanlDetails={setPersoanlDetails}
        education={education} setEducation={setEducation}
        />
        <PersonalDetails personalDetails={personalDetails} setPersoanlDetails={setPersoanlDetails}/>
        <Education education={education} setEducation={setEducation}/>
        <Experience/>
      </div>
      <div className="RightScreen">
        <div className="Preview">
          {personalDetails.fullName}
          {personalDetails.number}
          {personalDetails.email}
          {personalDetails.location}
          <p></p>
          {education.uniName}
          {education.year}
          {education.degree}
          {education.score}
          

        </div>
      </div>
    </div>
  );
};

export default App;