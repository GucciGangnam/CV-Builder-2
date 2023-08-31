// import Styles
import "./Education.css"

// import Hooks
import { useState } from "react"


// component

export const Education = ({ education, setEducation }) => {

    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const handleDropDownClick = () => {
        setIsDropDownOpen(!isDropDownOpen);
    }

    // Input Handlers
    const handleUniNameChange = (event) => {
        setEducation({ ...education, uniName: event.target.value })
    }
    const handleYearChange = (event) => {
        setEducation({ ...education, year: event.target.value })
    }
    const handleDegreeChange = (event) => {
        setEducation({ ...education, degree: event.target.value })
    }
    const handleScoreChange = (event) => {
        setEducation({ ...education, score: event.target.value })
    }

    // for submit handler 
    const handleFormSubmit=(e) => { 
        e.preventDefault();

    }






    return (
        <div className="Education">



            <button className="DropDownBtn"
                onClick={handleDropDownClick}>
                <h2>Education</h2>
                <img className="DDIcon"
                    src="src/assets/Icons/DropDown.png"
                    style={{ transform: isDropDownOpen ? 'rotate(0deg)' : 'rotate(180deg)' }}
                />
            </button>

            <form id="EducationForm">
                <p style={{ display: isDropDownOpen ? 'block' : 'none' }}>School</p>
                <input
                    type="text"
                    placeholder="Enter a university name"
                    value={education.uniName}
                    onChange={handleUniNameChange}
                    style={{ display: isDropDownOpen ? 'block' : 'none' }}
                />

                <p style={{ display: isDropDownOpen ? 'block' : 'none' }}>Year</p>
                <input
                    type="text"
                    placeholder="Enter your qualification"
                    style={{ display: isDropDownOpen ? 'block' : 'none' }}
                    value={education.year}
                    onChange={handleYearChange}
                />

                <p style={{ display: isDropDownOpen ? 'block' : 'none' }}>Degree</p>
                <input
                    type="text"
                    placeholder="Enter your graduation year"
                    style={{ display: isDropDownOpen ? 'block' : 'none' }}
                    value={education.degree}
                    onChange={handleDegreeChange}
                />

                <p style={{ display: isDropDownOpen ? 'block' : 'none' }}>Score</p>
                <input
                    type="text"
                    placeholder="Enter your score"
                    style={{ display: isDropDownOpen ? 'block' : 'none' }}
                    value={education.score}
                    onChange={handleScoreChange}
                />

                <button style={{ display: isDropDownOpen ? 'block' : 'none' }} onClick={handleFormSubmit}>Save</button>
            </form>








        </div>
    )
}