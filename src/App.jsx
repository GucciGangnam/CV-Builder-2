// import styles
import "./App.css"

//Import Hooks
import { useState } from "react";
// Import components
import { NavBar } from "./Components/NavBar";
import { ClearFill } from "./Components/ClearFill";
import { PersonalDetails } from "./Components/PersonalDetails";
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
  // fonts state
  const [font, setFont] = useState('Roboto')


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
          <Fonts font={font} setFont={setFont} />




        </div>
      </div>



      <div className="RightScreen" style={{
          fontFamily:
          font === 'Roboto' ? 'Roboto, sans-serif' :
          font === 'Lora' ? 'Lora, serif' :
          font === 'Courier New' ? 'Courier New, monospace' : 'inherit'
        }}>
        <div className="Preview">
          <div className="PersonalInfoPreview">
            <h1>{personalDetails.fullName}</h1>
            <div className="PersonalDetailsPreview">
              <div className="ContactDeatils">{"☎" + personalDetails.number}</div>
              <div className="ContactDeatils">{"✉" + personalDetails.email}</div>
              <div className="ContactDeatils">{"⌖" + personalDetails.location}</div>
            </div>
          </div>
          
          <div className="EDUandEXP">
           <div className="EducationPreview">
            <h1>Education</h1>
            {education.map((school, index) => (
              <div className="EducationDetailsPreview" key={index}>
                <div className="NameAndDeg">
                <div>{school.Uniname}</div>
                <div>{school.Degree}</div>
                </div>

                <div className="YearAndScore">
                  <div>{school.Year}</div>
                  <div>{school.Score}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="ExperiencePreview">
          <h1>Experience</h1>
          {experience.map((job, index) => (
            <div className="EducationDetailsPreview" key={index}>
              <div className="NameAndDeg">
                <div>{job.CompanyName}</div>
                <div>{job.Position}</div>
                </div>

                <div className="YearAndScore">
                  <div>{job.Duration}</div>
                  <div>{job.Description}</div>
                </div>
            </div>
          ))}
          </div>
          </div> 
          
        </div>
      </div>
    </div>
  );
};

export default App;
