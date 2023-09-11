// import Styles
import "./Experience.css"

//import Hooks
import { useState } from "react"

// component 
export const Experience = ({ experience, setExperience }) => {

//field states

const [companyName, setCompanyName] = useState("")
const [position, setPosition] = useState("")
const [duration, setDuration] = useState("")
const [description, setDescription] = useState("")


    // drop down 
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const handleDropDownClick = () => {
        setIsDropDownOpen(!isDropDownOpen);
    }

    // for submit handler 
    const handleExperienceFormSubmit = (e) => {
        e.preventDefault();

        const newRole = {
            CompanyName: companyName,
            Position: position, 
            Duration: duration, 
            Description: description}

            setExperience([...experience, newRole])

            setCompanyName('');
            setPosition('');
            setDuration('');
            setDescription('');
    }
    // form clear handler
    const HandleExperienceFormClear =(e) => { 
        e.preventDefault();
        setCompanyName("");
        setPosition("");
        setDuration("");
        setDescription("");
    }

    //handle delete a job 

    const handleDeleteJob = (indexToDelete) => { 
        const updatedExperience = experience.filter((job, index) => index !== indexToDelete);
        setExperience(updatedExperience);
    }

    return (
        <div className="Experience">
            <button className="DropDownBtn"
                onClick={handleDropDownClick}>
                <h2>Experience</h2>
                <img className="DDIcon"
                    src="src/assets/Icons/DropDown.png"
                    style={{ transform: isDropDownOpen ? 'rotate(0deg)' : 'rotate(180deg)' }}
                />
            </button>

            <form id="ExperienceForm" style={{ display: isDropDownOpen ? 'block' : 'none' }}>
                <p style={{ display: isDropDownOpen ? 'block' : 'none' }}>Company name</p>
                <input
                    type="text"
                    placeholder="Enter a company name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    style={{ display: isDropDownOpen ? 'block' : 'none' }}
                />

                <p style={{ display: isDropDownOpen ? 'block' : 'none' }}>Position</p>
                <input
                    type="text"
                    placeholder="Enter your position"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    style={{ display: isDropDownOpen ? 'block' : 'none' }}
                />

                <p style={{ display: isDropDownOpen ? 'block' : 'none' }}>Duration</p>
                <input
                    type="text"
                    placeholder="Enter the duration of your role"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    style={{ display: isDropDownOpen ? 'block' : 'none' }}
                />

                <p style={{ display: isDropDownOpen ? 'block' : 'none' }}>Description</p>
                <input
                    type="text"
                    placeholder="Enter a description of the role"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{ display: isDropDownOpen ? 'block' : 'none' }}
                />

                <div className="EducationFormButtons">
                    <button className="SaveEducationBTN" style={{ display: isDropDownOpen ? 'block' : 'none' }} onClick={handleExperienceFormSubmit}>Save</button>
                    <button className="ClearButton" style={{ display: isDropDownOpen ? 'block' : 'none' }} onClick={HandleExperienceFormClear} >Clear</button>
                </div>
            </form>
            <div className="Jobs"> 
                {experience.map((job, index)=>( 
                    <div key={index} className="SavedSchools">
                    {job.CompanyName}
                    <button className="ClearButton" onClick={() => {handleDeleteJob(index)}}>Delete</button>
            </div>
                ))}
            </div>


        </div>
    )
}