// import styles
import "./ClearFill.css"

export const ClearFill = ({setPersoanlDetails, setEducation, setExpereince}) => { 
    const handleFillTemplate=()=>{ 
        setPersoanlDetails({fullName: "John Smith", number: "555-555-555", email: "Johnsmith@gmail.com", location: "London, UK"})
        setEducation({uniName: "Cambridge University, UK", year: "2015", degree: "Bsc Computer Science", score: "1st"})
        setExpereince({company: "Lloyds Banking Group", position: "Project Manager", duration: "2015-2017", description: "Managing small to medium complex projects for group operation savings business case portfolio"})

    }
    const handleClearTemplate=()=>{ 
        setPersoanlDetails({fullName: "", number: "", email: "", location: ""})
        setEducation({uniName: "", year: "", degree: "", score: ""})
        setExpereince({company: "", position: "", duration: "", description: ""})

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