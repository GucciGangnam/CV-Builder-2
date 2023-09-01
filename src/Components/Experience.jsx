// import Styles
import "./Experience.css"

//import Hooks
import { useState } from "react"

// component 
export const Experience = ({ experience, setExperience }) => {

    // OnChange handlers
    const handleCompanyChange = (event) => {
        setExperience({ ...experience, company: event.target.value });
    }
    const handlePositionChange = (event) => {
        setExperience({ ...experience, position: event.target.value })
    }
    const handleDurationChange = (event) => {
        setExperience({ ...experience, duration: event.target.value })
    }
    const handleDescriptionChange = (event) => {
        setExperience({ ...experience, description: event.target.value })
    }


    // drop down 
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const handleDropDownClick = () => {
        setIsDropDownOpen(!isDropDownOpen);
    }

    // for submit handler 
    const handleFormSubmit=(e) => { 
        e.preventDefault();
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
                    value={experience.company}
                    onChange={handleCompanyChange}
                    style={{ display: isDropDownOpen ? 'block' : 'none' }}
                />

                <p style={{ display: isDropDownOpen ? 'block' : 'none' }}>Position</p>
                <input
                    type="text"
                    placeholder="Enter your position"
                    value={experience.position}
                    onChange={handlePositionChange}
                    style={{ display: isDropDownOpen ? 'block' : 'none' }}
                />

                <p style={{ display: isDropDownOpen ? 'block' : 'none' }}>Duration</p>
                <input
                    type="text"
                    placeholder="Enter the duration of your role"
                    value={experience.duration}
                    onChange={handleDurationChange}
                    style={{ display: isDropDownOpen ? 'block' : 'none' }}
                />

                <p style={{ display: isDropDownOpen ? 'block' : 'none' }}>Description</p>
                <input
                    type="text"
                    placeholder="Enter a description of the role"
                    value={experience.description}
                    onChange={handleDescriptionChange}
                    style={{ display: isDropDownOpen ? 'block' : 'none' }}
                />

                <button style={{ display: isDropDownOpen ? 'block' : 'none' }} onClick={handleFormSubmit}>Save</button>
            </form>


        </div>
    )
}