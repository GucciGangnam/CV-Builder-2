// Import Hooks
import { useState } from 'react';

// import Components
import { BasicInfo } from './Components/BasicInfo';
import { Education } from './Components/Education';
import { PreviewBasicInfo } from './Components/PreviewPage';
import { PreviewEducation } from './Components/PreviewPage';

// import style
import './App.css'





function App() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');

  const [schoolName, setSchoolName] = useState('');
  const [schoolYear, setSchoolYear] = useState('');
  const [degree, setDegree] = useState('');
  const [score, setScore] = useState('');
  

  return (
    <div className='App'>

      <div className='EditComps'>

        <BasicInfo 
        fullName={fullName} setFullName={setFullName} 
        email={email} setEmail={setEmail} 
        phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} 
        location={location} setLocation={setLocation}/>

        <Education
        schoolName={schoolName} setSchoolName={setSchoolName}
        schoolYear={schoolYear} setSchoolYear={setSchoolYear}
        degree={degree} setDegree={setDegree}
        score={score} setScore={setScore}
        />

      </div>

      <div className='PreviewComps'>

        <PreviewBasicInfo 
        fullName={fullName}
        phoneNumber={phoneNumber}
        email={email}
        location={location}/>

        <PreviewEducation 
        schoolName={schoolName}
        schoolYear={schoolYear}
        degree={degree}
        score={score}/>

      </div>

    </div>
  );
}

export default App;
