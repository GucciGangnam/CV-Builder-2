// imoport Styles 
import "./PersonalDetails.css"

//import Hooks
import { useState } from "react"

export const PersonalDetails = ({fullName, setFullName, number, setNumber, email, setEmail, location, setLocation}) => { 
    const handleFullNameChange=(event)=>{ 
        setFullName(event.target.value)
    }
    const handleNumberChange=(event)=>{ 
        setNumber(event.target.value)
    }
    const handleEmailChange=(event)=>{ 
        setEmail(event.target.value)
    }
    const handleLocationChange=(event)=>{
        setLocation(event.target.value)
    }
    
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const handleDropDownClick=()=>{ 
        setIsDropDownOpen(!isDropDownOpen);
    }

    
    return ( 
        <div className="PersonalDetails"> 

            <button className="DropDownBtn"onClick={handleDropDownClick}>
                <h2> Personal Details</h2> 
                <img className="DDIcon"
                src="src/assets/Icons/DropDown.png"
                style={{transform: isDropDownOpen ? 'rotate(0deg)' : 'rotate(180deg)'}}
                />
            </button>




            <p style={{display: isDropDownOpen ? 'block' : 'none'}}>Full Name</p>
            <input 
            type="text"
            value={fullName}
            onChange={handleFullNameChange}
            style={{display: isDropDownOpen ? 'block' : 'none'}}
            />

            <p style={{display: isDropDownOpen ? 'block' : 'none'}}>Phone Number</p>
            <input 
            type="text"
            value={number}
            onChange={handleNumberChange}
            style={{display: isDropDownOpen ? 'block' : 'none'}}
            />

            <p style={{display: isDropDownOpen ? 'block' : 'none'}}>Email</p>
            <input type="text"
            value={email}
            onChange={handleEmailChange}
            style={{display: isDropDownOpen ? 'block' : 'none'}}/>

            <p style={{display: isDropDownOpen ? 'block' : 'none'}}>Location</p>
            <input type="text"
            value={location}
            onChange={handleLocationChange}
            style={{display: isDropDownOpen ? 'block' : 'none'}}/>






        </div>
    )
}