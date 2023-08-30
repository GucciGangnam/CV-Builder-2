// imoport Styles 
import "./PersonalDetails.css"

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

    
    return ( 
        <div className="PersonalDetails"> 

            <button className="DropDownBtn"><h2> Personal Details</h2> V</button>

            <p>Full Name</p>
            <input 
            type="text"
            value={fullName}
            onChange={handleFullNameChange}

            />



            <p>Phone Number</p>
            <input 
            type="text"
            value={number}
            onChange={handleNumberChange}
            />



            <p>Email</p>
            <input type="text"
            value={email}
            onChange={handleEmailChange}/>





            <p>Location</p>
            <input type="text"
            value={location}
            onChange={handleLocationChange}/>

        </div>
    )
}