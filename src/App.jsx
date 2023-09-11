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
import { Layout } from "./Components/Layout";
import { Color } from "./Components/Color";
import { Fonts } from "./Components/Fonts";



const App = () => {
  //States
  //Personal Info
  const [personalDetails, setPersoanlDetails] = useState({fullName: "", number: "", email: "", location: ""})
  //Education
  const [education, setEducation] = useState([]);
  // Experience
  const [experience, setExperience] = useState({company: "", duration: "", position: "", description: ""})


  return (
    <div className='App'>
      <div className="LeftScreen">
        <NavBar/>
        <div className="ContentScreen">
          <ClearFill 
          setPersoanlDetails={setPersoanlDetails}
          setEducation={setEducation}
          setExpereince={setExperience}
          />
          <PersonalDetails personalDetails={personalDetails} setPersoanlDetails={setPersoanlDetails}/>
          <Education education={education} setEducation={setEducation}/>
          <Experience experience={experience} setExperience={setExperience}/>
        </div>

        <div className="CustomizeScreen"> 
          <Layout/>
          <Color/>
          <Fonts/>




        </div>
      </div>



      <div className="RightScreen">
        <div className="Preview">
          {personalDetails.fullName}
          {personalDetails.number}
          {personalDetails.email}
          {personalDetails.location}
          <p></p>
          

        </div>
      </div>
    </div>
  );
};

export default App;