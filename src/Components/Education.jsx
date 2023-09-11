// import Styles
import "./Education.css"

// import Hooks
import { useState, useEffect } from "react"


// component

//DELTE ME  IM JUST FOR REFERENCE

//const [education, setEducation] = useState({uniName: "", year: "", degree: "", score: ""})

export const Education = ({ education, setEducation }) => {

    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const handleDropDownClick = () => {
        setIsDropDownOpen(!isDropDownOpen);
    }

    //field states

    const [uniName, setUniName] = useState("")
    const [year, setYear] = useState("")
    const [degree, setDegree] = useState("")
    const [score, setScore] = useState("")

    // education object 


    // for submit handler 
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newSchool = {
            Uniname: uniName,
            Year: year,
            Degree: degree,
            Score: score
        }

        setEducation([...education, newSchool])
        setUniName("");
        setDegree("");
        setYear("");
        setScore("");
    }

    useEffect(() => {
        console.log(education)
    }, [education])

    // handle form clear button 
    const HandleFormClear = (e) => { 
        e.preventDefault();
        setUniName("");
        setDegree("");
        setYear("");
        setScore("");
    }

    //handle delete school 
    const handleDeleteSchool = (indexToDelete) => {
        const updatedEducation = education.filter((school, index) => index !== indexToDelete);
        setEducation(updatedEducation);
    };
    




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

            <form id="EducationForm" style={{ display: isDropDownOpen ? 'block' : 'none' }}>
                <p style={{ display: isDropDownOpen ? 'block' : 'none' }}>School</p>
                <input
                    type="text"
                    placeholder="Enter a university name"
                    style={{ display: isDropDownOpen ? 'block' : 'none' }}
                    value={uniName}
                    onChange={(e) => setUniName(e.target.value)}
                />

                <p style={{ display: isDropDownOpen ? 'block' : 'none' }}>Year</p>
                <input
                    type="text"
                    placeholder="Enter your qualification"
                    style={{ display: isDropDownOpen ? 'block' : 'none' }}
                    value={year}
                    onChange={(e) => setYear(e.target.value)}

                />

                <p style={{ display: isDropDownOpen ? 'block' : 'none' }}>Degree</p>
                <input
                    type="text"
                    placeholder="Enter your graduation year"
                    style={{ display: isDropDownOpen ? 'block' : 'none' }}
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                />

                <p style={{ display: isDropDownOpen ? 'block' : 'none' }}>Score</p>
                <input
                    type="text"
                    placeholder="Enter your score"
                    style={{ display: isDropDownOpen ? 'block' : 'none' }}
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                />
                <div className="EducationFormButtons">
                    <button className="SaveEducationBTN" style={{ display: isDropDownOpen ? 'block' : 'none' }} onClick={handleFormSubmit}>Save</button>
                    <button className="ClearButton"onClick={HandleFormClear}>Clear</button>
                </div>
            </form>

            <div className="Schools">

                
                    {education.map((school, index) => (
                        <div key={index} className="SavedSchools">
                                {school.Uniname}
                                <button onClick={() => handleDeleteSchool(index)}>delete</button>
                        </div>
                    ))}
                


            </div>
        </div>
    )
}