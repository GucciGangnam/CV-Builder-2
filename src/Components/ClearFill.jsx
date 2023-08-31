// import styles
import "./ClearFill.css"

export const ClearFill = ({setPersoanlDetails, setEducation}) => { 
    const handleFillTemplate=()=>{ 
        setPersoanlDetails({fullName: "John Smith", number: "555-555-555", email: "Johnsmith@gmail.com", location: "London, UK"})
        setEducation({uniName: "Cambridge University, UK", year: "2015", degree: "Bsc Computer Science", score: "1st"})

    }
    const handleClearTemplate=()=>{ 
        setPersoanlDetails({fullName: "", number: "", email: "", location: ""})
        setEducation({uniName: "", year: "", degree: "", score: ""})

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