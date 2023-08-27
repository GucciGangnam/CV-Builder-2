// import styles 
import "./PreviewPage.css"

export function PreviewBasicInfo({ fullName, phoneNumber, email, location }) {
    return <div className="previewBasicInfo">
        <h1>{fullName}</h1>
        {phoneNumber}
        {email}
        {location}
        </div>;
}

export function PreviewEducation({ schoolName, schoolYear, degree, score }) {
    return <div className="previewEducation">
        <h3>Education</h3>
        




        </div>;
}

// exports 
