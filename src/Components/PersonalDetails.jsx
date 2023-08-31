// imoport Styles 
import "./PersonalDetails.css"

//import Hooks
import { useState } from "react"

export const PersonalDetails = ({ personalDetails, setPersoanlDetails }) => {
    const handleFullNameChange = (event) => {
        setPersoanlDetails({ ...personalDetails, fullName: event.target.value })
    }
    const handleNumberChange = (event) => {
        setPersoanlDetails({ ...personalDetails, number: event.target.value })
    }
    const handleEmailChange = (event) => {
        setPersoanlDetails({ ...personalDetails, email: event.target.value })
    }
    const handleLocationChange=(event)=>{ 
        setPersoanlDetails({...personalDetails, location: event.target.value})
    }

    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const handleDropDownClick = () => {
        setIsDropDownOpen(!isDropDownOpen);
    }


    return (
        <div className="PersonalDetails">

            <button className="DropDownBtn" onClick={handleDropDownClick}>
                <h2> Personal Details</h2>
                <img className="DDIcon"
                    src="src/assets/Icons/DropDown.png"
                    style={{ transform: isDropDownOpen ? 'rotate(0deg)' : 'rotate(180deg)' }}
                />
            </button>


            <p style={{ display: isDropDownOpen ? 'block' : 'none' }}>Full Name</p>
            <input
                type="text"
                value={personalDetails.fullName}
                placeholder="Enter your full name"
                onChange={handleFullNameChange}
                style={{ display: isDropDownOpen ? 'block' : 'none' }}
            />

            <p style={{ display: isDropDownOpen ? 'block' : 'none' }}>Number</p>
            <input
                type="text"
                value={personalDetails.number}
                placeholder="Enter your contact number"
                onChange={handleNumberChange}
                style={{ display: isDropDownOpen ? 'block' : 'none' }}
            />

            <p style={{ display: isDropDownOpen ? 'block' : 'none' }}>Email</p>
            <input
                type="text"
                value={personalDetails.email}
                placeholder="Enter your email address"
                onChange={handleEmailChange}
                style={{ display: isDropDownOpen ? 'block' : 'none' }}
            />

            <p style={{ display: isDropDownOpen ? 'block' : 'none' }}>City</p>
            <input
                type="text"
                value={personalDetails.location}
                placeholder="Enter the city you are based in"
                onChange={handleLocationChange}
                style={{ display: isDropDownOpen ? 'block' : 'none' }}
            />


        </div>
    )
}