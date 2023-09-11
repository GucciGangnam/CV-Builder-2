// import styles
import "./ClearFill.css"

export const ClearFill = ({setPersoanlDetails, education, setEducation, experience, setExpereince}) => { 

    const handleFillTemplate=()=>{ 
        
        if (education.length || experience.length > 0){ 
            alert("You must clear the form first")
            return; 
        }

        setPersoanlDetails({ fullName: "John Smith", number: "555-555-555", email: "Johnsmith@gmail.com", location: "London, UK" });

        const newSchool = {
            Uniname: "Bristol University, UK",
            Year: "2015",
            Degree: "ComputerScience BcS",
            Score: "1st"
        }
        setEducation([...education, newSchool])

        const newJob = {
            CompanyName: "Lloyds Banking Group",
            Position: "Project Manager",
            Duration: "2015-2017",
            Description: "Manageing small to medium complexity projects"
        }
        setExpereince([...experience, newJob])

    }
    const handleClearTemplate=()=>{ 
        setPersoanlDetails({ fullName: "", number: "", email: "", location: "" });
        setEducation([]);
        setExpereince([]);

    }
    return( 
        <div className="ClearFill"> 
            <button className="ClearButton"
            onClick={handleClearTemplate}>
                Clear
            </button>
            <button className="FillButton"
            onClick={handleFillTemplate}>
                Fill
            </button>
        </div>
    )
}