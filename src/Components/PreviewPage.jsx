// import styles 
import "./PreviewPage.css"

export function PreviewBasicInfo({ fullName, phoneNumber, email, location }) {
    return <div className="previewBasicInfo">
        <h1>{fullName}</h1>
        <div className="Basic-info">
            ✉ {email}  |
            ☎ {phoneNumber}  |
            ⌂ {location}
        </div>
    </div>;
}

export function PreviewEducation({ schoolName, schoolYear, degree, score }) {
    return <div className="previewEducation">
        <h3>Education</h3>
        <div className="education-info">
            <div className="school">
                <b>{schoolName}</b>
                <p></p>
                {schoolYear}
            </div>
            <div className="degree">
                <b>{degree}</b>
                <p></p>
                {score}
            </div>
        </div>





        </div>;
}

// exports 
