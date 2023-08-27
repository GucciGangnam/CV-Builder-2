// import styles 
import "./Education.css"

export function Education({schoolName, setSchoolName, schoolYear, setSchoolYear, score, setScore, degree, setDegree}) {
    
    const handleSchoolName = (event) => {
        setSchoolName(event.target.value);
    };

    const handleSchoolYear = (event) => { 
        setSchoolYear(event.target.value);
    }

    const handleDegree = (event) => { 
        setDegree(event.target.value);
    }

    const handleScore = (event) => { 
        setScore(event.target.value);
    }

    return (
        <div className="Education">

            <h2> Education </h2>

            <input
                type="text"
                value={schoolName}
                onChange={handleSchoolName}
                placeholder="School Name"
            />

            <input
                type="text"
                value={schoolYear}
                onChange={handleSchoolYear}
                placeholder="Graduation Year"
            />

            <input
                type="tel"
                value={degree}
                onChange={handleDegree}
                placeholder="Degree"
            />

            <input
                type="text"
                value={score}
                onChange={handleScore}
                placeholder="Score"
            />

        </div>
    );
}