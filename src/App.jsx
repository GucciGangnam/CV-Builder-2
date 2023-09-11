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
  const [personalDetails, setPersoanlDetails] = useState({ fullName: "", number: "", email: "", location: "" })
  //Education
  const [education, setEducation] = useState([]);
  // Experience
  const [experience, setExperience] = useState([])


  return (
    <div className='App'>
      <div className="LeftScreen">
        <NavBar />
        <div className="ContentScreen">
          <ClearFill
            setPersoanlDetails={setPersoanlDetails}
            education={education}
            setEducation={setEducation}
            experience={experience}
            setExpereince={setExperience}
          />
          <PersonalDetails personalDetails={personalDetails} setPersoanlDetails={setPersoanlDetails} />
          <Education education={education} setEducation={setEducation} />
          <Experience experience={experience} setExperience={setExperience} />
        </div>

        <div className="CustomizeScreen">
          <Layout />
          <Color />
          <Fonts />




        </div>
      </div>



      <div className="RightScreen">
        <div className="Preview">
          <h1>Personal Info</h1>
          {personalDetails.fullName}
          {personalDetails.number}
          {personalDetails.email}
          {personalDetails.location}
          <h1>Education</h1>
          {education.map((school, index) => (
            <div key={index}>
              {school.Uniname}
              {school.Degree}
              {school.Year}
              {school.Score}
            </div>
          ))}
          <h1>Education</h1>
          {experience.map((job, index) => ( 
            <div key={index}>
            {job.CompanyName}
            {job.Position}
            {job.Duration}job
            {job.Description}
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;